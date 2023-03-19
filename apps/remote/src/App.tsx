import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, useCount, CountProvider } from "ui";
import { observer } from "mobx-react-lite";
import AppChild from "./AppChild";

interface Props {
    data: any;
}

function App({ data }: Props) {
    const { counterStore } = data;

    return (
        <div className="Remote">
            <h2>This is the remote</h2>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
            </div>
            <div className="card">
                <Button onClick={counterStore.incrementCount} />
            </div>
            <CountProvider store={counterStore}>
                <AppChild />
            </CountProvider>
        </div>
    );
}

export default observer(App);
