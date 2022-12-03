import mongoose from 'mongoose';
import { Application } from './declarations';
import logger from './logger';

export default function (app: Application): void {
  mongoose.connect(
    process.env.DB_HOST ?? 'http://localhost:27017',
    {
      authSource: 'admin',
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD
    }
  ).then(() => {
    logger.info('Connected to mongodb');
  })
    .catch(err => {
      logger.error(err);
      process.exit(1);
    });

  app.set('mongooseClient', mongoose);
}
