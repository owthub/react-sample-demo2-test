import { useRef } from "react";

function MyRef(){
    const inputRef = useRef(null);
    const counterRef = useRef(0);

    function focusInputBox(){
        inputRef.current.focus();
        console.log(inputRef.current);
    }
    function IncreaseCounter(){
        counterRef.current++;
        console.log(counterRef.current)
    }

    return (
        <div>
            <input ref={inputRef} type="text" name="name"/>
            <button onClick={focusInputBox}>Focus Input</button>
            <button onClick={IncreaseCounter}>Counter++</button>
        </div>
    );
}

export default MyRef;