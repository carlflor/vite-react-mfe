import React, { createContext, ReactNode, useContext, useState } from "react";
import { makeObservable, observable, action } from "mobx";

interface ButtonProps {
    onClick: () => void;
}

export const Button = ({ onClick }: ButtonProps) => {
    return <button onClick={onClick}>Click me</button>;
};

// create the context
const CountContext = createContext({
    count: 0,
    incrementCount: () => {},
});

export class CounterStore {
    count = 0;

    constructor() {
        const cachedCount = window.localStorage.getItem("count");

        if (cachedCount && cachedCount !== "") {
            this.count = Number(cachedCount);
        }

        makeObservable(this, {
            count: observable,
            incrementCount: action,
        });
    }

    incrementCount = () => {
        this.count += 1;
        window.localStorage.setItem("count", `${this.count}`);
    };
}

interface Props {
    store: CounterStore;
    children: ReactNode;
}

// create the provider
export const CountProvider = ({ children, store }: Props) => {
    return (
        <CountContext.Provider value={store}>{children}</CountContext.Provider>
    );
};

// create a custom hook to get the context
export const useCount = () => {
    const counterStore = React.useContext(CountContext);

    return counterStore;
};
