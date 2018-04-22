import Fastify from "fastify";
import split from "split2";
import dotenv from "dotenv";

import configStore from "./config";

dotenv.config();

const fastify = Fastify({
    logger: configStore.retrieve("/logger"),
});

fastify.get("/", async (request, reply) => {
    reply.type("application/json").code(200);
    return { hello: "worsld" };
});

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
