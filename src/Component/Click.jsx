import React from 'react';

function Click(props) {
    console.log("Button cliccked")
    return ( 
        <div>
            <form className="">
                <input type='checkbox' rows="" cols=""></input>
            </form>
       <h1>{props.fname}</h1>
       <div>
      <button className="btn btn-primary" type="button" onClick={Click}>Click Me </button>
       </div>

        </div>
     );
}
export default Click;