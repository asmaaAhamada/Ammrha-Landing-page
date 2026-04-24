import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import people from '../../../../../../assets/image/ramadan/12.jpg';
import { detailsData } from "./data";

export default function Section2({ id }) {
      const data = detailsData[id];

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
        minHeight: "70vh",
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
{data.title}</Typography>

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
{data.desc}      </Typography>

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
بينما تتسابق الأنحاء كلها في ميادين الخير، اخترنا أن نكون جزءاً من هذا السباق في ساحة المسكية. بُسطت الموائد، وتوزعت الأيادي بين من يُعدّ أرغفة اللبنة والجبن والمربّى، ومن يتولّى التغليف في القسم المخصّص، حيث يُجهَّز كلُّ كيسٍ بعنايةٍ فائقة.
وبفضل دعمٍ كريمٍ من عددٍ من الشركات الراعية، وبالتعاون المباشر مع مديرية الأوقاف في عددٍ من الجوامع، استطعنا خلال يومي السادس والعشرين والسابع والعشرين من الشهر أن نجهّز ما مجموعه 8625 وجبة. كلُّ وجبةٍ كانت أشبه بلقمةِ محبةٍ وصلت في أوانها.        </Typography>

        <a
  href="https://www.facebook.com/share/r/14bgGx7qkbz/"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none" }}
>
  <Button
    sx={{
      color: theme.palette.text.secondary1,
      backgroundColor: theme.palette.primary.more,
      border: `1px solid ${theme.palette.primary.moreborder}`,
      borderRadius: "12px",
      fontSize: "16px",
      textTransform: "none",
    }}
  >
    عرض مقطع ريلز ...
    <ExpandMoreOutlinedIcon sx={{ mr: 1 }} />
  </Button>
</a>
      </Box>

     

        {/* الصورة الفعلية */}
        <Box
          component="img"
                 src={data.image2}

          alt="volunteers"
          sx={{
            width: { xs: "100%", md: "593px" },
            height: { xs: "200px", md: "320px" },
            borderRadius: "16px",
            zIndex: 1,
            objectFit: "cover",
          }}
        />
      </Box>
   
  );
}