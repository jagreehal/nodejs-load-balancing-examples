import dotenv from 'dotenv';
dotenv.config();
import { createApp } from './app';
import { id } from './utils/create-id';
import { getEnv } from './utils/get-env';
import { logger } from './utils/logger';

const PORT = getEnv('PORT', Number);
const HOST = getEnv('HOST', String);

process.on('SIGINT', () => {
  logger.info(`app:${id} is shutting down`);
  process.exit(0);
});

async function start() {
  const app = createApp();
  return new Promise((resolve, reject) => {
    app.listen(PORT, HOST).once('listening', resolve).once('error', reject);
  });
}

start().then(() => {
  logger.info(`app:${id} is running at http://localhost:${PORT}`);
});
