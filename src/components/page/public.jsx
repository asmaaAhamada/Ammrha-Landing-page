import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";
import Fetuers from "./fetuers";
import Who from "./Who-We-Are";
import Attribuits from "./attribute";
import Keep from "./keep";


export default function Public(){
    return(
        <>
    <HomePage/>
    <Fetuers/>
    <Who/>
    <Attribuits/>
    <Keep/>
    </>
    )
}