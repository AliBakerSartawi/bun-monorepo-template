import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import fastify from 'fastify';
import { appRouter } from './src/router/_app.router';
import { createContext } from './src/context';
import cors from '@fastify/cors';

const server = fastify({
  maxParamLength: 5000
});

server.register(cors, {});

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter, createContext }
});

(async () => {
  try {
    await server.listen({ port: 5000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();

// TODO superjson??
