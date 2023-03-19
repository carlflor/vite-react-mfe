# React Vite MFE w/ Native Federation

### Monorepo structure

This codebase follows the template structure of a monorepo boilerplate by Turbrepo.
`apps` folder contains two apps, `host` and `remote`

Inside `packages` are shared modules. One of it is `ui` which exports a button and a Mobx store.
The apps both render the button and share state via the Mobx store.

### Other Libraries

-   Turborepo (monorepo)
-   Mobx (shared state management)

### Develop

To develop all apps and packages, run the following command:

```
pnpm install
pnpm dev
```

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Limitations

#### Native Federation skips ui package for now because of the following:

1. `ui` package needs to be compiled to js module, as the a federated import in the browser has to be in js.
2. native federation caches the dependency of the apps in a dist folder (import maps)
3. if `ui` is compiled and gets cached as a dependency, the apps won't get the latest changes in the `ui` modules. (unless the node_modules are deleted and reinstalled)

This means each app (host/remote) will have its own copy of code from `ui` package at compile time.
