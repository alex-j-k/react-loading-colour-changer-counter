import React from 'react'

const TicketButton = (props) => {

    const handleClick = () => {
        props.addOne();
    }

    return ( 
        <div className="TickerButton">
            <button onClick={handleClick}>Click me to add one!</button>
        </div>
     );
}
 
export default TicketButton;