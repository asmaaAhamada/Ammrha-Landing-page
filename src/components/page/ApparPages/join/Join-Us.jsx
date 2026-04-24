import { Outlet } from "react-router-dom";
import Section1 from "./section1";
import Section2 from "./section2";
import Communication from "../home/communcation";


export default function JOIN_US(){
    return(
        <>
<Section1/> 
<Section2/>
<Communication/>
   </>
    )
}