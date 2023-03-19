const {
    withNativeFederation,
    shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
    name: "remote",
    exposes: {
        "./remote": "./src/App.tsx",
    },
    shared: shareAll({
        singleton: true,
    }),
    skip: ["react-dom/server", "react-dom/server.node", "ui"],
});
