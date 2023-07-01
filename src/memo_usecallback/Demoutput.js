import React from "react";
const Dem=(props)=>{
    console.log('update');
return(
   <p>{props.onshow && "this is new!"}</p>
)
}
export default React.memo(Dem);
