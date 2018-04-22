const helloResolver = async (rootValue, args, context, operations) => {
    console.log(context);
    return "world";
};

export default {
    Query: {
        hello: helloResolver,
    },
};
