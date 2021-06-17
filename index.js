// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})
const path = require('path')
const cors =require('fastify-cors')

fastify.register(cors)

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
})

// Declare a route
fastify.get('/products', function (request, reply) {
    reply.sendFile(`products.json`)
})

fastify.get('/equal', function (request, reply) {
    reply.sendFile(`equal.json`)
})

// Run the server!
fastify.listen(8085, `0.0.0.0`, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})