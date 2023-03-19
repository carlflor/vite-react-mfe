import React from "react";
import ReactDOM from "react-dom/client";
import { CounterStore } from "ui";
import App from "./App";

// note: this code is invoked when this remote is run as a standalone

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App data={{ counterStore: new CounterStore() }} />
    </React.StrictMode>
);
