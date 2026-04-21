import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import people from '../../../../assets/image/Section.png';

export default function Section1() {
  const theme = useTheme();

  return (
   
    <>
       <Box
          component="img"
          src={people}
          alt="volunteers"
          sx={{
            width: { xs: "100%", md: "100%" },
            height: { xs: "200px", md: "347px" },
           
            objectFit: "cover",zIndex: 1, 
            // نتأكد أن الصورة ليست شفافة
            opacity: 1,
          }}
        />

     

       

      
<Box
          sx={{
            // تموضعه ليكون تحت الصورة مباشرة
            position: 'absolute',
            bottom: '-15px', // يمكنك تعديل هذه القيمة لضبط بعد الظل عن الصورة
            left: '50%',
            transform: 'translateX(-50%)',
            // الشكل البيضوي
            width: '90%', // عرض الظل بالنسبة لعرض الصورة
            height: '15px', // ارتفاع الظل البيضوي
            borderRadius: '50%',
            // لون الخلفية مع الشفافية
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // لون أسود شفاف
            // تطبيق التأثير البلوري
            filter: 'blur(8px)', // يمكنك تعديل القيمة لزيادة أو تقليل البلورة
            // نستخدم z-index ليكون تحت الصورة
            zIndex: 0, 
          }}
        />
      

      
        
      
</>
        
  

  );
}