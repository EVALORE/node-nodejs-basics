import { Transform } from 'stream';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const content = chunk.toString();
      callback(null, content.substring(0, content.length - 2).split('').reverse().join(''));
    },
  });

  process.stdout.write('write something: ');

  process.stdin.on('data', (data) => {
    reverseTransform.write(data);
  })

  reverseTransform.on('data', (data) => {
    process.stdout.write('reversed: ' + data + '\n');
    process.exit();
  })
};

await transform();
