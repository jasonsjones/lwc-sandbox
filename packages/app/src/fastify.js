import Fastify from 'fastify';
import path from 'path';
import { fileURLToPath } from 'url';
import fastifyStatic from '@fastify/static';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({
    logger: true
});

fastify.register(fastifyStatic, {
    root: path.join(__dirname, '../dist'),
    prefix: '/' // optional: default '/'
});

fastify.get('/', function (_req, reply) {
    reply.sendFile('index.html'); // serving path.join(__dirname, 'public', 'myHtml.html') directly
});

// Run the server!
fastify.listen({ port: 3001 }, (err, _address) => {
    if (err) throw err;
    // Server is now listening on ${address}
});
