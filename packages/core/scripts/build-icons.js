const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../icons/svg');
const META_FILE = path.join(__dirname, '../icons/meta.json');
const OUTPUT_FILE = path.join(__dirname, '../src/components/icons/index.tsx');
const META_OUTPUT_FILE = path.join(__dirname, '../src/components/icons/meta.ts');

const meta = JSON.parse(fs.readFileSync(META_FILE, 'utf-8'));

const HEADER = `import * as React from "react"
import { cn } from "@ling-design/utils"

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

const createIcon = (path: React.ReactNode, displayName: string) => {
  const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size = "1em", ...props }, ref) => (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 12 12"
        fill="none"
        className={className}
        {...props}
      >
        {path}
      </svg>
    )
  )
  Icon.displayName = displayName
  return Icon
}
`;

let content = HEADER + '\n';

Object.entries(meta).forEach(([key, info]) => {
  const filename = `${key}.svg`;
  const filePath = path.join(ICONS_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: SVG file not found for ${key}: ${filePath}`);
    return;
  }

  let svgContent = fs.readFileSync(filePath, 'utf-8');
  
  const start = svgContent.indexOf('>');
  const end = svgContent.lastIndexOf('</svg>');
  
  if (start === -1 || end === -1) {
    console.warn(`Warning: Invalid SVG format for ${key}`);
    return;
  }
  
  let inner = svgContent.substring(start + 1, end).trim();
  
  // Simple attribute mapping for React
  inner = inner
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/class=/g, 'className=')
    .replace(/fill="#4285F4"/g, 'fill="currentColor"')
    .replace(/fill="#4285f4"/g, 'fill="currentColor"');


  content += `\nexport const ${info.name} = createIcon(\n  <>\n    ${inner}\n  </>,\n  "${info.name}"\n)\n`;
});

fs.writeFileSync(OUTPUT_FILE, content);
console.log(`Generated icons at ${OUTPUT_FILE}`);

// Generate Meta
const metaContent = `export interface IconMeta {
  name: string
  category: string
  description: string
}

export const iconsMeta: Record<string, IconMeta> = ${JSON.stringify(meta, null, 2)}
`;

fs.writeFileSync(META_OUTPUT_FILE, metaContent);
console.log(`Generated meta at ${META_OUTPUT_FILE}`);
