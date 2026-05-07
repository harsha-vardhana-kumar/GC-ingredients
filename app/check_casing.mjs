import fs from "fs";
import path from "path";

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === "node_modules" || file === ".next") continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
      results.push(filePath);
    }
  }
  return results;
}

const allFiles = getFiles("./src");
let issues = [];

for (const file of allFiles) {
  const content = fs.readFileSync(file, "utf8");
  const regex = /import\s+(?:.*?\s+from\s+)?['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1];
    if (!importPath.startsWith(".") && !importPath.startsWith("@/")) continue;

    let targetPath;
    if (importPath.startsWith("@/")) {
      targetPath = path.resolve("./src", importPath.substring(2));
    } else {
      targetPath = path.resolve(path.dirname(file), importPath);
    }

    // Try extensions
    const exts = ["", ".tsx", ".ts", ".js", ".jsx", "/index.tsx", "/index.ts"];
    let found = false;
    let truePath = null;
    let matchedExt = "";

    for (const ext of exts) {
      if (fs.existsSync(targetPath + ext)) {
        found = true;
        try {
          truePath = fs.realpathSync.native(targetPath + ext);
          matchedExt = ext;
        } catch (e) {}
        break;
      }
    }

    if (found && truePath) {
      // Compare the target path provided by resolve vs the true path from OS
      // Make them relative to compare easily
      const relativeTarget = path.relative(process.cwd(), targetPath + matchedExt).toLowerCase();
      const relativeTrue = path.relative(process.cwd(), truePath).toLowerCase();
      
      if (relativeTarget === relativeTrue) {
        // Paths match conceptually, let's check exact casing
        const exactTarget = path.relative(process.cwd(), targetPath + matchedExt);
        const exactTrue = path.relative(process.cwd(), truePath);
        
        if (exactTarget !== exactTrue) {
          issues.push({
            file,
            importPath,
            expected: exactTrue.replace(/\\/g, '/'),
            actual: exactTarget.replace(/\\/g, '/')
          });
        }
      }
    }
  }
}

console.log(JSON.stringify(issues, null, 2));
