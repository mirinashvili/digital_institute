import React, {useState} from 'react';

function Counter () {
    const [count, setCount] = useState(10);

    return (
        <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>{count}</p>
        </div>
    )
}

export default Counter