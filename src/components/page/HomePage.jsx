import React from "react";
import { Box, Typography, Button ,Chip, Toolbar, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import r1 from "../../assets/image/logo/ImageWithFallback5.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import  {gray, mainColor} from '../color-main/color'
import ButtonJoin from "./Button/join";
import ButtonConect from "./Button/conect";
export default function HomePage() {
    const theme = useTheme();
  
  return (
    <>
    
    
   
   <Box
  sx={{
    position: "relative",
    height: { xs: "400px", md: "750px" },
    overflow: "hidden",
  }}
>
      {/* Image */}
      <img
        src={r1}
        alt="background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay Content */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          textAlign: "right",
          px: { xs: 2, sm: 4, md: 10 },
          py: { xs: 2, md: 0 },
          zIndex: 2,
         background: {
  xs: "rgba(0,0,0,0.55)", // للموبايل
  md: `linear-gradient(90deg, 
       rgba(15, 33, 85, 0.9) 0%, 
       rgba(66, 84, 136, 0.8) 50%, 
       rgba(113, 127, 166, 0.6) 100%)`, // تدرج الألوان التي أرسلتها
},
        }}
      >
        <Chip
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: mainColor,
        px: 1,
        py: 2,
        borderRadius: "20px",mt:'-3px',
      }}
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
            نصنع الفرق معاً
          </Typography>

          <FavoriteBorderIcon
            sx={{
              fontSize: 18,
              color:mainColor,
            }}
          />
        </Box>
      }
    />
        {/* Title */}
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "16px", sm: "18px", md: "64px" },
            color: mainColor,

            maxWidth: "500px",
           
          }}
        >
          أحدث فرقا في مجتمعك
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontWeight: 400,mr:3,
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
            color:theme.palette.text.textlight,
            maxWidth: "520px",
            lineHeight: 1.8,
          }}
        >
          انضم الى شبكتنا من المتطوعين المتفائلين وساعد في
          <br />
           إحداث تغيير إيجابي. معاً يمكننا بناء مستقبل أفضل 
             <br />
.للجميع
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // 🔥 ثابت حتى بالموبايل
            gap: 2,
            mt: 6,
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Link to="/conect" style={{ textDecoration: "none" }}>
         <ButtonJoin/>
          </Link>
          <ButtonConect/>

        </Box>
      </Box>
    </Box>
     </>
  );
}