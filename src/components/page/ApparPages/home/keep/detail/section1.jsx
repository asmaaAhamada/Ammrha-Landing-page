import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import people from '../../../../../../assets/image/ramadan/image.png';
import { detailsData } from "./data";

export default function Section1({ id }) {
    const data = detailsData[id];
  const theme = useTheme();

  return (
   

    <>
       <Box
          component="img"
         src={data.image1}
          alt="volunteers"
          sx={{
            width: { xs: "100%", md: "100%" },
            height: { xs: "200px", md: "409px" },
           
            objectFit: "cover",
    objectPosition: "center",
          }}
        />

     

       

      

      

      
        
      
</>
        
  

  );
}