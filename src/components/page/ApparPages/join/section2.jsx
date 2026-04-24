import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import people from '../../../../assets/image/logo/ImageWithFallback6.png';
import ButtonJoin from "../home/Button/join";
import ButtonConect from "../home/Button/conect";
import { black, darkblack, gray4, white } from "../../../color-main/color";
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export default function Section2() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row-reverse" }, // ترتيب العناصر (نص يمين، صورة يسار)
        gap: { xs: 4, md: 10 },
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        minHeight: "70vh",mb:{xs:0,md:50}
      }}
    >
      {/* القسم الأيمن: النص */}
      <Box
        sx={{
          flex: "1",mr:9,
          textAlign: "right", // محاذاة النص لليمين
          direction: "rtl",   // لضمان تنسيق اللغة العربية
        }}
      >
        {/* عنوان صغير فرعي */}
      <Typography
  sx={{
    fontSize: "16px",
    color: theme.palette.text.textcard,
    fontWeight: 600,
    mb: 1,
    position: "relative",
    display: "inline-block",

    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -1,
      width: "22px",
      height: "1px",
      backgroundColor: "rgba(244, 185, 70, 1)",
      right: 0 // 👈 هون الحل
    }
  }}
>
  من نحن
</Typography>

        {/* العنوان الرئيسي */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "16px", md: "28px" },
            color: theme.palette.text.secondary,
            lineHeight: 1.3,
            mb: 3,
            maxWidth: "550px",
          }}
        >
سجّل عبر تطبيقنا        </Typography>

        {/* الوصف */}
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "18px",
            color: theme.palette.text.primary,
            maxWidth: "530px",
            lineHeight: 1.8,
            mb: 4,
          }}
        >
للتسجيل كمتطوع، قم بتنزيل تطبيقنا للهاتف المحمول والتسجيل من خلاله. سيرشدك التطبيق عبر كامل عملية الانضمام، ويربطك بالفعاليات، ويتتبع مساهماتك.        </Typography>

 <Box
          sx={{
            display: "flex",
            flexDirection: "row", // 🔥 ثابت حتى بالموبايل
            gap: 2,
           
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "center"},
          }}
        >
         <Button
  sx={{
    width: { xs: "100px", md: "154px" },
    height: { xs: "40px", md: "61px" },
    backgroundColor: "black",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    color: "white",
    textTransform: "none",
  }}
>
  

  {/* النص */}
  <Box sx={{ textAlign: "left", lineHeight: 1 }}>
    <Typography sx={{ fontSize: { xs: "6px", md: "10.4px" },color:gray4 }}>
      Get it on
    </Typography>
    <Typography sx={{ fontSize: { xs: "8px", md: "14px" }, color:white }}>
      Google Play
    </Typography>
  </Box>
    <SaveAltIcon sx={{ fontSize: { xs: 14, md: 20 } }} />

</Button>
 <Button
  sx={{
    width: { xs: "100px", md: "154px" },
    height: { xs: "40px", md: "61px" },
    backgroundColor: "black",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    color: "white",
    textTransform: "none",
  }}
>
  

  {/* النص */}
  <Box sx={{ textAlign: "left", lineHeight: 1 }}>
    <Typography sx={{ fontSize: { xs: "6px", md: "10.4px" },color:gray4 }}>
      Download on the
    </Typography>
    <Typography sx={{ fontSize: { xs: "8px", md: "14px" }, color:white }}>
App Store    </Typography>
  </Box>
    <SaveAltIcon sx={{ fontSize: { xs: 14, md: 20 } }} />

</Button>
        </Box>
      
      </Box>

     
     

        {/* الصورة الفعلية */}
        <Box
          component="img"
          src={people}
          alt="volunteers"
          sx={{
            width: { xs: "100%", md: "464px" },
            height: { xs: "200px", md: "384px" },
            borderRadius: "16px",
            zIndex: 1,
            objectFit: "cover",
          }}
        />
     
    </Box>
  );
}