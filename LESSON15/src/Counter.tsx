/*
 * Copyright (c) - All Rights Reserved.
 * 
 * See the license file for more information.
 */

import { ReactNode} from "react"
import { useCounter } from "./context/CounterContext"
import { userCounterText } from "./context/CounterContext"





type ChildrenType = {
    children: (num: number) => ReactNode
}


const Counter = ({ children }: ChildrenType) => {
    
    const { count, increment, decrement } = useCounter()
    const { text, handleTextInput } = userCounterText()

    return (
        <>
            <h1>{children(count)}</h1>
            <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            </div>
            <input type="text" onChange={handleTextInput}/>
            <h2>{text}</h2>
        </>
    )
}

export default Counter