import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import people from '../../../../assets/image/logo/ImageWithFallback.png';

export default function Who() {
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
          تمكين المجتمعات من خلال العمل التطوعي
        </Typography>

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
          نربط الأفراد الشغوفين بفرص ذات مغزى، وتعمل منصتنا على تبسيط إدارة العمل التطوعي للمؤسسات من كافة الأحجام، مما يسهل تنسيق المساهمات وتتبعها والاحتفاء بها.
        </Typography>

        {/* الزر */}
        <Link to="/about-us" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: theme.palette.text.secondary1,
              backgroundColor:theme.palette.primary.more,
              border:`4px 2px solid ${theme.palette.primary.moreborder}`,
              borderRadius: "12px",
             
              fontSize: "16px",
              textTransform: "none",
              borderWidth: "1px",
              
               
            
            }}
          >
            لمعرفة المزيد من نحن...
                        <ExpandMoreOutlinedIcon sx={{mr:3}}/>

          </Button>
        </Link>
      </Box>

      {/* القسم الأيسر: الصورة مع الخلفية الزرقاء */}
      <Box
        sx={{
          position: "relative",
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* المربع الخلفي الملون (Decoration Box) */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: "300px", md: "532px" },
            height: { xs: "200px", md: "288px" },
            backgroundColor: theme.palette.primary.imagecard,
            borderRadius: "16px",
            top: { md: "-20px" },
            left: { md: "-10px" },
            zIndex: 0,
          }}
        />

        {/* الصورة الفعلية */}
        <Box
          component="img"
          src={people}
          alt="volunteers"
          sx={{
            width: { xs: "100%", md: "532px" },
            height: { xs: "200px", md: "288px" },
            borderRadius: "16px",
            zIndex: 1,
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
}