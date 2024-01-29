import { stat, rename } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileWrongName = resolve(__dirname, 'files', 'wrongFilename.txt');
const fileRightName = resolve(__dirname, 'files', 'ProperFilename.md');

const renameFile = async () => {
  stat(fileWrongName, (err) => {
    if (err) throw 'FS operation failed';
  });
  stat(fileRightName, (err) => {
    if (!err) throw 'FS operation failed';
  });
  rename(fileWrongName, fileRightName, (err) => {
    if (err) throw err;
  });
};

await renameFile();
