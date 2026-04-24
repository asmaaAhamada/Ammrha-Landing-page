import React, { useEffect, useState } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import people from '../../../../../../assets/image/ramadan/12.jpg';
import { detailsData } from "./data";

export default function Section2({ id }) {
      const data = detailsData[id];

  const theme = useTheme();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === data.image2.length - 1 ? 0 : prev + 1
      );
    }, 2000); // كل ثانيتين

    return () => clearInterval(interval);
  }, [data.image2.length]);

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
            {data.typ} 
</Typography>
        <a
  href={data.link}
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
      src={data.image2[current]}

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