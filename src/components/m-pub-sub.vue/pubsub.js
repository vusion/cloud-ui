const topics = {};

export default {
    publish(topic, ...args) {
        if (!topics[topic])
            topics[topic] = [];
        else
            topics[topic].forEach((func) => func(...args));
        // Record the last arguments
        topics[topic].lastArgs = args;
    },
    unpublish(topic) {
        if (topics[topic])
            delete topics[topic].lastArgs;
    },
    subscribe(topic, func) {
        if (!topics[topic])
            topics[topic] = [];
        else if ('lastArgs' in topics[topic])
            func(...topics[topic].lastArgs);
        topics[topic].push(func);
    },
    unsubscribe(topic, func) {
        if (topics[topic])
            topics[topic].splice(topics[topic].indexOf(func), 1);
    },
};
