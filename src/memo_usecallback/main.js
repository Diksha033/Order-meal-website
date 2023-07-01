import Dem from "./Demoutput";
import Button from "./Button";
import { useCallback, useState } from "react";
const Main=()=>{
    const[showpara,setshowpara]=useState(false);
    const[allowtoggle,setallowtoggle]=useState(false);
    console.log('app running');

const allow=()=>{
setallowtoggle(true)
}

    const toggle= useCallback(()=>{
      if(allowtoggle){
        setshowpara((prevshowpara)=>!prevshowpara);
      }
    },[allowtoggle]);
return(
    <div>
    <h1>hiii </h1>
    <Button onclick={toggle}>doit</Button>
    <button onClick={allow}>allow</button>
    <Dem onshow={showpara}></Dem>
    </div>
)
}
export default Main;