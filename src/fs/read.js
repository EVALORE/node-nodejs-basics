import { stat, readFile } from 'node:fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToRead = resolve(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  stat(fileToRead, (err) => {
    if (err) throw 'FS operation failed';
  })
  readFile(fileToRead, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

await read();
