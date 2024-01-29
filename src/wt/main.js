import { Worker, isMainThread } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
  const numberOfCPUs = os.cpus().length;

  const workersResult = new Array(numberOfCPUs).fill({
    status: 'pending',
    data: null,
  });

  console.log(`Creating ${numberOfCPUs} worker threads`);

  for (let i = 0; i < numberOfCPUs; ++i) {
    const worker = new Worker(new URL('./worker.js', import.meta.url), {
      workerData: { workerId: i, nValue: 10 + i },
    });

    worker.on('message', (msg) => {
      workersResult[msg.workerId] = {
        status: 'resolved',
        data: msg.data,
      };
    });

    worker.on('error', () => {
      workersResult[msg.workerId] = {
        status: 'error',
        data: null,
      };
    });

    worker.on('exit', () => {
      if (workersResult.every((worker) => worker.status !== 'pending')) {
        console.log(workersResult);
      }
    });
  }
};

await performCalculations();
