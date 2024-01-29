import { stat, createReadStream } from 'fs';
import crypto from 'crypto';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToRead = resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const readStream = createReadStream(fileToRead);
  const hash = crypto.createHash('sha256');
  readStream.on('readable', () => {
    const data = readStream.read();
    if (data) {
      hash.update(data)
    } else {
      console.log(hash.digest('hex'));
    }
  })
};

await calculateHash();
