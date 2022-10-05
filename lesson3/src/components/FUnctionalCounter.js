import { useState } from "react";

export function FUnctionalCounter(props) {
    const {initialValue} = props;

    const [value, setValue] = useState(initialValue);

    const increment = () => {
        setValue(value + 1);   
    }

    const reset = () => {
        setValue(initialValue)
    }

    return (
        <div>
            <p>FUnctionalCounter: {value} </p>
            <button onClick={() => increment()}>+</button>
            <button onClick={(reset)}>Reset to initial</button>
        </div>
    )
}
