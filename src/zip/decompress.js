import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';

const decompress = async () => {
  const gunzip = createGunzip();

  const readStream = createReadStream(
    new URL('./files/archive.gz', import.meta.url)
  );
  const writeStream = createWriteStream(
    new URL('./files/fileToCompress.txt', import.meta.url)
  );

  pipeline(readStream, gunzip, writeStream, (err) => {
    if (err) {
      console.log(err);
    }
  });

  // readStream.on('data', (chunk) => {
  //   gunzip.write(chunk);
  // })

  // gunzip.on('data', (chunk) => {
  //   writeStream.write(chunk);
  // })
};

await decompress();
