// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
})

// Declare a route
fastify.get('/', function (request, reply) {
    reply.sendFile(`db.json`)
})

// Run the server!
fastify.listen(8085, `0.0.0.0`, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})