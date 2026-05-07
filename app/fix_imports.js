import fs from 'fs';
import path from 'path';

const dirs = [
  "n:/GCI/app/src/components/application-detail",
  "n:/GCI/app/src/components/innovation-detail"
];

let files = [];
for (const d of dirs) {
  const dirFiles = fs.readdirSync(d);
  for (const f of dirFiles) {
    if (f.endsWith('.tsx')) files.push(path.join(d, f));
  }
}

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (!content.includes('GCIcon')) {
     continue; 
  }
  
  if (!content.includes('import { GCIcon')) {
    content = content.replace(/,\s*type LucideIcon/g, '');
    content = content.replace(/type LucideIcon\s*,?/g, '');
    
    content = content.replace(/'use client';\n/g, "'use client';\n");
    content = content.replace(/"use client";\n/g, `"use client";\nimport { GCIcon, type IconName } from "../ui/GCIcon";\n`);
    
    fs.writeFileSync(file, content);
    console.log("Fixed imports in " + file);
  }
}
