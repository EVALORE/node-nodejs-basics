import { stat, unlink } from 'node:fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToRemove = resolve(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  stat(fileToRemove, (err) => {
    if (err) throw 'FS operation failed';
  })
  unlink(fileToRemove, (err) => {
    if (err) throw err;
    console.log('File removed');
  });
};

await remove();
