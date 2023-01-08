import fs from 'fs';
import express, { Express } from 'express';
import { logger } from './utils/logger';
import { id } from './utils/create-id';

export const createApp = (): Express => {
  const app = express();

  app.get('/', async (req, res) => {
    logger.info(`id: ${id}`);
    res.json({ id });
  });

  app.get('/boom', async (req, res) => {
    logger.info(`id: ${id}`);
    await fs.readFileSync('non-existent-file');
    return res.status(200);
  });

  return app;
};
