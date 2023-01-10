import dotenv from 'dotenv';
dotenv.config();
import { createApp } from './app';
import { id } from './utils/create-id';
import { logger } from './utils/logger';
import * as z from 'zod';

const envSchema = z.object({
  PORT: z.number().int().min(1).max(65535),
  HOST: z.string(),
});

const { PORT, HOST } = envSchema.parse(process.env);

// PM2 messes about with node internals so the below do NOT work as expected
// process.on('uncaughtException', async (err, origin) => {
//   logger.error(err, `uncaughtException app:${id} is shutting down`);
//   process.exit(0);
// });

// process.on('unhandledRejection', async (reason, promise) => {
//   logger.error(reason, `uncaughtException app:${id} is shutting down`);
//   process.exit(0);
// });

async function start() {
  const app = createApp();
  return new Promise((resolve, reject) => {
    app.listen(PORT, HOST).once('listening', resolve).once('error', reject);
  });
}

start().then(() => {
  logger.info(`app:${id} is running at http://${HOST}:${PORT}`);
});
