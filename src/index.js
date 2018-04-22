import Fastify from "fastify";
import split from "split2";
import { GraphQLError } from "graphql";
import { formatError } from "apollo-errors";
import fastifyJWTPlugin from "fastify-jwt";

// Configuration data
import configStore from "./config";

// Database
import Loader from "./dbLoader";

//Plugins
import GraphQLFastifyPlugin from "./plugins/graphql";

import Errors from "./graphql/errors";
import Schema from "./graphql";

const fastify = Fastify({
    logger: configStore.retrieve("/logger"),
});

const errorFormatter = error => {
    let e = formatError(error);
    if (e instanceof GraphQLError) {
        e = formatError(
            new Errors.UnknownError({
                data: {
                    originalMessage: e.message,
                    originalError: e.name,
                },
            })
        );
    }

    return e;
};

fastify
    .register(fastifyJWTPlugin, {
        secret: configStore.retrieve("/jwtSecret"),
    })
    .after(err => {
        if (err) throw err;
        fastify.register(GraphQLFastifyPlugin, {
            query: {
                schema: Schema,
                graphiql: true,
                formatError: errorFormatter,
                context: {
                    Loader,
                    JWTUtils: fastify.jwt,
                },
            },
            route: {
                path: "/graphql",
            },
        });
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
