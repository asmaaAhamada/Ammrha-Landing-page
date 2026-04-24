import { useParams } from "react-router-dom";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Communication from "../../communcation";

export default function Details(){
  const { id } = useParams();

  return (
    <>
      <Section1 id={id}/>
      <Section2 id={id}/>
      <Section3 id={id}/>
      <Communication/>
    </>
  )
}