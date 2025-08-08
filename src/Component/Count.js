import React, { useState } from 'react';
function Count() {
// count 0 1 2 3 4 5
// 
const [count, setCount] = useState(0) //value is zero
const [fname, setFname] = useState()

    return (  

        <div>
            <h1>
            <button onClick={() => setCount(count + 1)}><h1>{count}</h1> </button>

            </h1>
        </div>

    );
}

export default Count;