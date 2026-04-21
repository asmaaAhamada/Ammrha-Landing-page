

import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import people from '../../../../assets/image/logo/Logo Container.svg';

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
بناء الجسور بين الناس والغاية        </Typography>

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
مؤسسة تنموية إنسانية غير ربحية (غير حكومية)，مرخصة برقم 1075. تهدف إلى تمكين الأفراد والمجتمعات في سوريا لتجاوز التحديات المعيشية والاقتصادية من خلال برامج تنموية وإنسانية مستدامة، وتدعم فئات متعددة كالأطفال وكبار السن        </Typography>

       
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
       

        {/* الصورة الفعلية */}
        <Box
          component="img"
          src={people}
          alt="volunteers"
          sx={{
            width: { xs: "100%", md: "464px" },
            height: { xs: "200px", md: "320px" },
            borderRadius: "16px",
          }}
        />
      </Box>
    </Box>
    

  );
}