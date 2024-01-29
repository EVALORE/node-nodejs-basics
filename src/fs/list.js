import { stat, readdir } from 'node:fs';
import { dirname, resolve, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderToCheck = resolve(__dirname, 'files');

const list = async () => {
  stat(folderToCheck, (err) => {
    if (err) throw 'FS operation failed';
  });
  readdir(folderToCheck, (err, files) => {
    if (err) throw err;
    console.log(files.map((file) => basename(file)));
  });
};

await list();
