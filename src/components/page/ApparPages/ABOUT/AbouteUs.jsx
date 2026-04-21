import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import people from '../../../../assets/image/Section.png';
import Section2 from "./section2";
import Section1 from "./section1";
import Section3 from "./section3";
import Section4 from "./section4";
import Communication from "../home/communcation";

export default function AboutUs() {
  const theme = useTheme();

  return (
   <Box>
    {/* الصورة */}
       <Section1/>
            {/* =======الصورة =======*/}

      <Section2/>
      <Section3/>
            <Section4/>
            <Communication/>

</Box>
       

      

      

      
        
      

        
  

  );
}