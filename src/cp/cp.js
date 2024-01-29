import { spawn } from 'child_process';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const childFile = resolve(__dirname, 'files', 'script.js');
  const childProcess = spawn('node', [childFile, ...args], {
    stdio: ['pipe', 'pipe', 'inherit'],
  });

  process.stdin.on('data', (data) => {
    childProcess.stdin.write(data);
  })

  childProcess.stdin.on('close', () => {
    process.exit();
  })

  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data)
  });
};

spawnChildProcess([10, 11, 12]);
