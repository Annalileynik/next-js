import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter]=useState(0)
    return (
        <div>
            <button
                type="file" className="file:border file:border-solid ..."
            onClick={()=>setCounter(counter + 1)}
            > + </button>
            {counter}
            <button
                type="file" className="file:border file:border-solid ..."
            onClick={()=>setCounter(counter -1)}
            > - </button>
        </div>
    );
};

export default Counter;