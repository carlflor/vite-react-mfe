const {
    withNativeFederation,
    shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
    name: "web-admin",
    shared: shareAll(),
    skip: ["react-dom/server", "react-dom/server.node"],
});
