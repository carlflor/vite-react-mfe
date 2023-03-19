import { CounterStore, useCount } from "ui";
import { observer } from "mobx-react-lite";

interface Props {
    counterStore: CounterStore;
}

function AppChild() {
    const store = useCount();

    return (
        <div>
            this is the remote child
            <h1>{store.count}</h1>
        </div>
    );
}

export default observer(AppChild);
