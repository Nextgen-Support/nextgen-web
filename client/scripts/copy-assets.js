import { copyFile, mkdir, readdir, stat, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function copyDir(src, dest) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
      console.log(`Copied: ${srcPath} -> ${destPath}`);
    }
  }
}

async function main() {
  try {
    const publicDir = join(__dirname, '../public');    
    const distDir = join(__dirname, '../dist');
    
    // Create dist directory if it doesn't exist
    if (!existsSync(distDir)) {
      await mkdir(distDir, { recursive: true });
    }
    
    // Copy all files from public to dist
    console.log('Copying assets from public to dist...');
    await copyDir(publicDir, distDir);
    
    console.log('Asset copy complete!');
  } catch (error) {
    console.error('Error copying assets:', error);
    process.exit(1);
  }
}

main();
