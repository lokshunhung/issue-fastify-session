
import fastifySession from '@fastify/session'

import Fastify        from 'fastify'
import FastifyCookie  from 'fastify-cookie'

const app = Fastify()

app.register(FastifyCookie)
app.register(fastifySession)

;(async () => {

  await app.listen(3000, '0.0.0.0')
  console.log('👍 Server running')

})()
