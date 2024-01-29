import { open } from 'fs/promises';

const write = async () => {
  const fileHandle = await open(new URL('./files/fileToWrite.txt', import.meta.url), 'w')
  const writeStream = fileHandle.createWriteStream();

  process.stdout.write("write something: ")

  process.stdin.on('data', (data) => {
    writeStream.write(data);
    process.exit();
  })

  writeStream.on("finish", () => {
    writeStream.close();
  })
};

await write();
