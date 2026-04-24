import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import people from '../../../../assets/image/as.png';
import { blue, darkblue, white } from "../../../color-main/color";

export default function Section1() {
  const theme = useTheme();

  return (
   
     <Box sx={{height:'217px',  display: "flex",              // 👈 مهم
    flexDirection: "column",      // 👈 ترتيب عمودي
    justifyContent: "center",     // 👈 توسيط عمودي
    alignItems: "center", background: `linear-gradient(90deg, 
  ${darkblue} 0%,
  ${blue} 100%
)`,
      
}}>
        <Typography
                 sx={{
                   fontSize: "36px",
                   color: white,
                   fontWeight: 600,
                   mb: 1,
                  alignItems:'center',    position: "relative", // 👈 مهم
   
                   display: 'flex',justifyContent:'center',
       
                  
                 }}
               >
    انضم إلى مجتمعنا            </Typography>
                <Typography
                 sx={{
                    fontWeight: 700,
               fontSize: { xs: "12px", md: "16px" },
                   color: white,
                
                  alignItems:'center',
                   display: 'flex',justifyContent:'center'
                  
                 }}
               >
ابدأ رحلتك التطوعية اليوم، وأحدث تأثيراً حقيقياً.           </Typography>
     
       </Box>
        
  

  );
}