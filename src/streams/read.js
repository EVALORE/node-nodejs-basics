import { open } from 'fs/promises';

const read = async () => {
  const fileHandle = await open(new URL('./files/fileToRead.txt', import.meta.url));
  const stream = fileHandle.createReadStream();

  stream.on('data', (chunk) => {
    process.stdout.write(chunk + '\n');
  });
  stream.on('end', () => {
    fileHandle.close();
  })
};

await read();
