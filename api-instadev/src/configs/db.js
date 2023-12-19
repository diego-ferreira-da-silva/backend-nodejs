require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'mysql',
  database: 'instadev',
  DB_PORT: 3306,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

/* dialect: process.env.DIALECT,
  host: process.env.HOST,
  username: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT, */
  