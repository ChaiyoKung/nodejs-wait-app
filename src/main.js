require("dotenv").config();

const DEFAULT_WAIT_MS = 1000;
const WAIT_MS = process.env.WAIT_MS ? parseInt(process.env.WAIT_MS) : DEFAULT_WAIT_MS;

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function main() {
  const start = new Date();
  console.log(`[main] start: ${start.toISOString()}`);

  console.log(`[main] wait: ${WAIT_MS}ms`);
  await wait(WAIT_MS);

  const end = new Date();
  console.log(`[main] end: ${end.toISOString()}`);

  console.log("[main] completed");
}

main();
