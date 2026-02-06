const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '../packages/core/src/components');
const OUTPUT_FILE = path.join(__dirname, '../ling-design-integration-skill/references/component-props.md');

// Ensure output directory exists
const outputDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function extractInterfaces(content) {
  // Match `export interface XxxProps ... { ... }`
  // Captures the interface name and the body block
  const regex = /export interface (\w+)(?:[^{]*)\{([\s\S]*?)\}/g;
  let match;
  const interfaces = [];

  while ((match = regex.exec(content)) !== null) {
    const name = match[1];
    const rawBody = match[2];
    
    // Simple cleanup of the body
    const cleanBody = rawBody
      .split('\n')
      .filter(line => line.trim() !== '') // Remove empty lines
      .join('\n');

    interfaces.push({
      name: name,
      body: cleanBody
    });
  }
  return interfaces;
}

function extractCvaVariants(content) {
    // Attempt to extract variants from cva(...)
    // This is a naive regex but works for standard formatting
    const regex = /variants:\s*{([\s\S]*?)},\s*defaultVariants/g;
    const match = regex.exec(content);
    if (!match) return null;
    
    return match[1].trim();
}

function generateMarkdown() {
  if (!fs.existsSync(COMPONENTS_DIR)) {
      console.error(`Components directory not found: ${COMPONENTS_DIR}`);
      return;
  }

  const files = fs.readdirSync(COMPONENTS_DIR);
  let markdown = "# Component API Reference\n\n> Auto-generated documentation for AI consumption. DO NOT EDIT MANUALLY.\n\n";

  files.forEach(file => {
    // Only process top-level .tsx files for now
    if (!file.endsWith('.tsx') && !file.endsWith('.ts')) return;
    
    const filePath = path.join(COMPONENTS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Capitalize first letter for display title
    const rawName = path.basename(file, path.extname(file));
    const componentName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    
    // Skip index files or test files
    if (rawName === 'index' || rawName.includes('.test')) return;

    const interfaces = extractInterfaces(content);
    const variants = extractCvaVariants(content);

    if (interfaces.length === 0 && !variants) return;

    markdown += `## ${componentName} (${file})\n\n`;
    
    if (variants) {
        markdown += `### Styling Variants\n\`\`\`typescript\n// Available variants (from cva)\n{\n${variants}\n}\n\`\`\`\n\n`;
    }

    interfaces.forEach(intf => {
      markdown += `### \`${intf.name}\`\n\`\`\`typescript\ninterface ${intf.name} {\n${intf.body}\n}\n\`\`\`\n\n`;
    });

    markdown += "---\n\n";
  });

  fs.writeFileSync(OUTPUT_FILE, markdown);
  console.log(`Generated docs at: ${OUTPUT_FILE}`);
}

generateMarkdown();
