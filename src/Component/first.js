//Create first functional component
//import React, { Component } from 'react';

function First(props) {
    return ( 
    <div>
    
    <h1 className="">Welcome to First Component</h1>
    
    {props.name}
    <h1>{props.age}</h1>
    </div> 
    );
}

export default First;