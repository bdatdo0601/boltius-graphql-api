const helloResolver = async (a, b, c, d) => {
    console.log(a, b, c, d);
    return "world";
};

export default {
    Query: {
        hello: helloResolver,
    },
};
