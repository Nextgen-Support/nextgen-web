import { existsSync, rmSync, unlinkSync, lstatSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = join(__dirname, 'dist');

// Function to delete files and directories
function cleanDist() {
  if (!existsSync(distPath)) {
    console.log('dist directory does not exist. No cleanup needed.');
    return;
  }

  // List of files and directories to delete
  const itemsToDelete = [
    'asset/cards',
    'asset/image',
    'asset/news',
    'test-video.html',
    'test.html'
  ];
  
  // Keep these directories
  const keepDirs = [
    'asset/videos'
  ];

  itemsToDelete.forEach(item => {
    const itemPath = join(distPath, item);
    try {
      // Skip if this is a directory we want to keep
      const shouldKeep = keepDirs.some(keepDir => item.startsWith(keepDir));
      if (shouldKeep) {
        console.log(`Skipping: ${itemPath} (protected directory)`);
        return;
      }
      
      if (existsSync(itemPath)) {
        if (lstatSync(itemPath).isDirectory()) {
          rmSync(itemPath, { recursive: true, force: true });
          console.log(`Removed directory: ${itemPath}`);
        } else {
          unlinkSync(itemPath);
          console.log(`Removed file: ${itemPath}`);
        }
      }
    } catch (error) {
      console.error(`Error removing ${itemPath}:`, error);
    }
  });
}

cleanDist();
