import React from 'react'
import {useState} from 'react'
import Ticker from './Ticker'
import TicketButton from './TickerButton'

const Counter = () => {

    const [count, setCount] = useState('Loading...')

    setTimeout(() => {setCount(0)}, 10000)

    const addOne = () => {
        const currentCount = count;
        setCount(currentCount + 1)
    }

    return ( 
        <div className="counter">
            <h1>Counter</h1>
                <div className="display">
                    <Ticker count={count}></Ticker>
                </div>
                <TicketButton addOne={addOne}></TicketButton>
        </div>
     );
}
 
export default Counter;
