export const config: any = {
  local: {
    port: process.env.PORT,
    db: {
      host: process.env.DB_HOST,
      userName: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      dialect: 'mysql',
      port: process.env.DB_PORT,
      logging: true,
    },
    secret: {
      jwt: process.env.JWT_SECRET,
    },
  },
  development: {
    port: process.env.PORTDEV,
    db: {
      host: process.env.DB_HOST,
      userName: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      dialect: 'mysql',
      port: process.env.DB_PORT,
      logging: false,
    },
    secret: {
      jwt: process.env.JWT_SECRET,
    },
  },
};
