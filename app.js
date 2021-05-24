const express = require('express')
const server = express()
const {PORT} = process.env
const HealthController = require('./controllers/health')

server.get('/health', HealthController.health)

server.listen(PORT, () => console.log(`Hola mundo desde el puerto ${PORT}`))