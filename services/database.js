const knex = require('knex')
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_PORT
} = process.env



async function isHealthy() {
  const DB = knex({
    client: 'pg',
    connection: {
      host : POSTGRES_HOST,
      user : POSTGRES_USER,
      password : POSTGRES_PASSWORD,
      database : POSTGRES_DB,
      port: POSTGRES_PORT
    }
  })

  const {rows} = await DB.raw('select 1+1 as result')
  console.log(rows)
  return Number(rows.pop().result) === 2 
}

module.exports = {
  isHealthy
}