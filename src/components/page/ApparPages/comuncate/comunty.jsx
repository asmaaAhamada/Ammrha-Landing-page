import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import Communication from "../home/communcation";
import Section1 from "./section1";
import Section2 from "./section2";

export default function Join() {
  const theme = useTheme();

  return (
   <Box>
    {/* الصورة */}
       <Section1/>
          

      <Section2/>
     
            <Communication/>

</Box>
       

      

      

      
        
      

        
  

  );
}