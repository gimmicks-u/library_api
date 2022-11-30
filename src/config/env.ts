import * as dotenv from 'dotenv';
dotenv.config();

const env = {
  port: process.env.PORT,
  url: process.env.URL,
  nodeEnv: process.env.NODE_ENV,
};

export default env;
