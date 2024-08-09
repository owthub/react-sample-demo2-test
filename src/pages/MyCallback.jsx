import { useCallback, useState } from "react";
import Counter from "./Counter";

function MyCallback(){

    const [countValue1, setCountValue1] = useState(1)
    const [countValue2, setCountValue2] = useState(5)

    const memorizeCounterValue1 = useCallback ( () => {
        setCountValue1(countValue1+1)
    }, [countValue1] )

    const memorizeCounterValue2 = useCallback ( () => {
        setCountValue2(countValue2+5)
    }, [countValue2] )

    return <>
        <Counter count={countValue1} handleOnClickCounter={ memorizeCounterValue1 } />

        <Counter count={countValue2} handleOnClickCounter={ memorizeCounterValue2 } />
    </>
}

export default MyCallback;