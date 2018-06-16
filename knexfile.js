
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/<your database name here>'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};