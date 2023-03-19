# React Vite MFE w/ Native Federation

### Other Libraries

-   Turborepo (monorepo)
-   Mobx (state management)

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```

### Limitations

#### Native Federation skips ui package for now because of the following:

1. `ui` package needs to be compiled from typescript to common js module, as the a federated import cannot in the browser has to be in js.
2. native federation caches the dependency of the apps
3. if `ui` is compiled and gets cached as a dependency, the apps won't get the latest changes in the `ui` modules. (unless the node_modules are deleted and reinstalled)

This means each app (host/remote) will have its own copy of code from `ui` package at compile time.
