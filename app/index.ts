
import fastifySession from '@fastify/session'

import Fastify        from 'fastify'
import FastifyCookie  from 'fastify-cookie'

import Redis from 'ioredis'
import ConnectRedis from 'connect-redis'

const app = Fastify()

app.register(FastifyCookie)

const client = new Redis({
  host: '127.0.0.1',
  port: 6379,
})

const redisStore = ConnectRedis(fastifySession)

app.register(fastifySession, {
  store: new redisStore({
    client,
    host: '127.0.0.1',
    port: 6379,
  }),
  secret: 'the-secret',
})

;(async () => {

  await app.listen(3000, '0.0.0.0')
  console.log('👍 Server running')

})()
