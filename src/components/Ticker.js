import React from 'react'

const Ticker = (props) => {


    return ( 
        
        <div className={isNaN(props.count) ? 'tickerred' : 'tickergreen'}>
            <h1>{props.count}</h1>
        </div>
        
     );
        
}
 
export default Ticker;