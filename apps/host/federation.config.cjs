const {
    withNativeFederation,
    shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
    name: "host",
    shared: shareAll({
        singleton: true,
    }),
    skip: ["react-dom/server", "react-dom/server.node", "ui"],
});
