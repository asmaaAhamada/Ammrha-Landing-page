import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";
import Fetuers from "./fetuers";
import Who from "./Who-We-Are";
import Attribuits from "./attribute";
import Keep from "./keep/keep";
import Ready from "./ready";
import Communication from "./communcation";
import { useInViewAnimation } from "../../useInViewAnimation";


export default function Public(){
    const [homeRef, homeInView] = useInViewAnimation();
  const [statsRef, statsInView] = useInViewAnimation();
  const [quesRef, quesInView] = useInViewAnimation();
  const [cardRef, cardInView] = useInViewAnimation();
  const [redoRef, redoInView] = useInViewAnimation();
  const [conectRef, conectInView] = useInViewAnimation();
    return(
        <>
        
    <HomePage/>
     <div
  ref={statsRef}
  style={{
    opacity: statsInView ? 1 : 0,
    transform: statsInView ? "translateY(0px)" : "translateY(50px)",
    transition: "all 0.8s ease-out",

    position: "relative",   // 🔥 مهم جدًا
    zIndex: 5               // 🔥 أعلى من الخلفية
  }}
>
  <Fetuers />
</div>
    
    
    
       <Who/>
      <div
        ref={cardRef}
        style={{
          opacity: cardInView ? 1 : 0,
          transform: cardInView ? "translateY(0px)" : "translateY(50px)",
          transition: "all 0.8s ease-out",
        }}
      >
            <Attribuits/>

      </div>
     

            <Keep/>

      
      <div
        ref={conectRef}
        style={{
          opacity: conectInView ? 1 : 0,
          transform: conectInView ? "translateY(0px)" : "translateY(50px)",
          transition: "all 0.8s ease-out",
        }}
      >    <Ready/>
</div>
    <Communication/>
    </>
    )
}



  
     
       

      

     