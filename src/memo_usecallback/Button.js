import React from "react";


const Button=(props)=>{
    console.log("button running")
    return<button onClick={props.onclick}>{props.children}</button>
}
export default React.memo(Button);