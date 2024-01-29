import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
  const gzip = createGzip();

  const readStream = createReadStream(
    new URL('./files/fileToCompress.txt', import.meta.url)
  );
  const writeStream = createWriteStream(
    new URL('./files/archive.gz', import.meta.url)
  );

  // this two methods make gz file bigger

  // readStream.pipe(gzip).pipe(writeStream);

  pipeline(readStream, gzip, writeStream, (err) => {
    if (err) {
      console.log(err);
    }
  });

  // readStream.on('data', (chunk) => {
  //   console.log(chunk.toString())
  //   gzip.write(chunk);
  // })

  // gzip.on('data', (chunk) => {
  //   console.log(chunk.toString());
  //   writeStream.write(chunk);
  // })
};

await compress();
