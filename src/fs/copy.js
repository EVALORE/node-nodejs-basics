import { stat, readdir, copyFile, mkdir } from 'node:fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const directoryToCopy = resolve(__dirname, 'files');
const directoryCopy = resolve(__dirname, 'files_copy');

const copy = async () => {
  stat(directoryToCopy, (err) => {
    if (err) throw 'FS operation failed';
  });
  stat(directoryCopy, (err) => {
    if (!err) throw 'FS operation failed';
    mkdir(directoryCopy, { recursive: true }, (err) => {
      if (err) throw err;
    });
  })
  readdir(directoryToCopy, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      copyFile(
        resolve(directoryToCopy, file),
        resolve(directoryCopy, file),
        (err) => {
          if (err) throw err;
        }
      );
    });
  });
};

await copy();
