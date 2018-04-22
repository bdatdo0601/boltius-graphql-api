import Confidence from "confidence";

const document = Object.freeze({
    logger: {
        $filter: "env",
        production: false,
        $default: true,
    },
});

const store = new Confidence.Store();

store.load(document);

const criteria = Object.freeze({
    env: process.env.NODE_ENV,
});

const retrieve = key => store.get(key, criteria);

export default {
    retrieve,
};
