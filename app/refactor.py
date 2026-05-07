import os
import glob
import re

components_dir_1 = r"n:\GCI\app\src\components\application-detail"
components_dir_2 = r"n:\GCI\app\src\components\innovation-detail"
pages_dir_1 = r"n:\GCI\app\src\app\solutions\applications"
pages_dir_2 = r"n:\GCI\app\src\app\innovation"

def process_component(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Imports
    content = content.replace('import { type LucideIcon } from "lucide-react";', 'import { GCIcon, type IconName } from "../ui/GCIcon";')
    content = content.replace('import { CheckCircle2, ArrowRight, type LucideIcon } from "lucide-react";', 'import { CheckCircle2, ArrowRight } from "lucide-react";\nimport { GCIcon, type IconName } from "../ui/GCIcon";')
    content = content.replace('import { ArrowRight, type LucideIcon } from "lucide-react";', 'import { ArrowRight } from "lucide-react";\nimport { GCIcon, type IconName } from "../ui/GCIcon";')

    # Types
    content = content.replace('Icon: LucideIcon;', 'Icon: IconName;')

    # JSX tags
    content = re.sub(r'<Icon\s+className=(.*?)\s*/>', r'<GCIcon name={Icon} className=\1 />', content)
    content = re.sub(r'<([a-zA-Z0-9_]+)\.Icon\s+className=(.*?)\s*/>', r'<GCIcon name={\1.Icon} className=\2 />', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def process_page(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove lucide-react import completely
    content = re.sub(r'import\s+\{.*?\}.*?from\s+"lucide-react";\s*', '', content, flags=re.DOTALL)

    # Change Icon={Name} to Icon="Name"
    content = re.sub(r'Icon=\{([A-Z][a-zA-Z0-9]*)\}', r'Icon="\1"', content)

    # Change { Icon: Name, ... } to { Icon: "Name", ... }
    content = re.sub(r'Icon:\s*([A-Z][a-zA-Z0-9]*)\s*,', r'Icon: "\1",', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Process components
for d in [components_dir_1, components_dir_2]:
    for f in glob.glob(os.path.join(d, "*.tsx")):
        process_component(f)

# Process pages
for d in [pages_dir_1, pages_dir_2]:
    for f in glob.glob(os.path.join(d, "**", "page.tsx"), recursive=True):
        process_page(f)

print("Done")
