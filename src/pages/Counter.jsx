import { memo } from "react";
import { useNavigation } from "react-router-dom";

function Counter({count, handleOnClickCounter}){
    console.log("This is called", count, handleOnClickCounter);
    return <>
        <button onClick={handleOnClickCounter}>Increase {count}</button>
    </>
}

export default memo(Counter);