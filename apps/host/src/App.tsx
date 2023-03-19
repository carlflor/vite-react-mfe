import { lazy, useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { loadRemoteModule } from "@softarc/native-federation";
import { Button, CountProvider, CounterStore, useCount } from "ui";
import { observer } from "mobx-react-lite";
import AppChild from "./AppChild";

function App() {
    const [counterStore] = useState(() => new CounterStore());

    const Remote = lazy(
        async () => await loadRemoteModule("remote", "./remote")
    );

    return (
        <CountProvider store={counterStore}>
            <div className="host">
                <div className="panel">
                    <h2>This is the host</h2>
                    <div className="card">
                        <Button onClick={counterStore.incrementCount} />
                    </div>
                    <AppChild />
                </div>
                <Suspense fallback="loading...">
                    <Remote data={{ counterStore }} />
                </Suspense>
            </div>
        </CountProvider>
    );
}

export default observer(App);
