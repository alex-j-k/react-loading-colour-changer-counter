import React from 'react'
import {useState} from 'react'


const ColourChanger = () => {

    const [state, setState] = useState('royal blue')
    console.log(state)

    const handleClick = () => {
        switch (Math.floor(Math.random()*10)){
        case 0:
        setState('red');
        break;
        case 1:
            setState('blue');
        break;
        case 2:
            setState('green');
        break;
        case 3:
            setState('orange');
        break;
        case 4:
            setState('purple');
        break;
        case 5:
            setState('pink');
        break;
        case 6:
            setState('lightgreen');
        break;
        case 7:
            setState('aqua');
        break;
        case 8:
            setState('palegoldenrod');
        break;
        case 9:
            setState('scarlet');
        break;
        default:
            setState( 'royalblue');
        }
    }



    return ( 
        <div className='colourchanger' >
            <h1>ColourChanger</h1>
            <div className= {`square ${state}`}>
            </div>
                <h4>Your random colour is {state}</h4>
            <button className="colourbutton" onClick={handleClick}>Colour Randomiser Button</button>
        </div>
     );
}
 
export default ColourChanger;