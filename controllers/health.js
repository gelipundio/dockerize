const dbService = require('../services/database')

async function health(req, res) {
  try {
    const isHealthy = await dbService.isHealthy()
    res.json({
      isHealthy
    })
  } catch(error) {
    console.log(error)
    res.json({
      isHealthy: false,
      error
    })
  }
}

module.exports = {
  health
}