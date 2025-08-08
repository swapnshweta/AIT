import React, { useState, useEffect } from 'react';



function DemoEffect() {
    const [count, setCount] = useState(0);
    // Similar to componentDidMount and componentDidUpdate
    
    useEffect(() => {
    document.title = `You clicked ${count} times`;
    // Cleanup (componentWillUnmount)
    console.log(count)
    
    return () => {
    document.title = 'React App';
    };
    }, [count]); // Only re-run the effect if count changes
    return (
    <div>
    <p>You clicked Marks {count} times</p>
    <button onClick={() => setCount(count + 1)}>
    Click me
    </button>
    </div>
    );
    }
    export default DemoEffect;