import { workerData, parentPort } from 'worker_threads';
// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  parentPort.postMessage({
    workerId: workerData.workerId,
    data: nthFibonacci(workerData.nValue),
  });
};

sendResult();
