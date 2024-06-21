import helmet from 'helmet';

export const applyHelmet = (app) => {
  app.use(helmet());
};