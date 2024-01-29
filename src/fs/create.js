import { stat, writeFile } from 'node:fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToCreate = resolve(__dirname, 'files', 'fresh.txt');

const create = async () => {
  stat(fileToCreate, (err) => {
    if (!err) throw 'FS operation failed';
  })
  writeFile(fileToCreate, 'I am fresh and young', (err) => {
    if (err) throw err;
    console.log('File created');
  });
};

await create();
