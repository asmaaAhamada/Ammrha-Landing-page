import React from "react";
import { Box, Typography, Chip, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import r1 from "../../../../assets/image/logo/ImageWithFallback5.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { mainColor } from '../../../color-main/color';
import ButtonJoin from "./Button/join";
import ButtonConect from "./Button/conect";

export default function HomePage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        // تغيير الارتفاع ليكون مرناً: 100vh لملء الشاشة أو auto للموبايل
        height: { xs: "100vh", md: "750px" },
        minHeight: { xs: "600px", md: "750px" },
        overflow: "hidden", // لمنع أي سكرول غير ضروري
        display: "flex",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={r1}
        alt="background"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* Overlay Content */}
      <Box
        sx={{
          position: "relative", // تغيير من absolute لـ relative لتحكم أفضل في التدفق
          zIndex: 2,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          // التوسيط في الموبايل والمحاذاة لليمين في الشاشات الكبيرة
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-end" },
          textAlign: { xs: "center", md: "right" },
          px: { xs: 2, sm: 4, md: 10 },
          background: {
            xs: `linear-gradient(0deg, rgba(15, 33, 85, 0.8) 0%, rgba(15, 33, 85, 0.4) 100%)`, // تدرج عمودي للموبايل
            md: `linear-gradient(90deg, rgba(15, 33, 85, 0.9) 0%, rgba(66, 84, 136, 0.8) 50%, rgba(113, 127, 166, 0.6) 100%)`
          },
        }}
      >
        <Chip
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: mainColor,
            px: 1,
            py: 2,
            borderRadius: "20px",
            mb: 2,
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                نصنع الفرق معاً
              </Typography>
              <FavoriteBorderIcon sx={{ fontSize: 18, color: mainColor }} />
            </Box>
          }
        />

        {/* Title */}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", sm: "3rem", md: "54px" }, // استخدام rem لمرونة أكبر
            color: mainColor,
            maxWidth: "600px",
            lineHeight: 1.2,
          }}
        >
          أحدث فرقًا في مجتمعك
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontWeight: 400,
            mt: 2,
            fontSize: { xs: "16px", md: "20px" },
            color: theme.palette.text.textlight || "#fff",
            maxWidth: "520px",
            lineHeight: 1.6,
            // إزالة المارجن اليمين في الموبايل للتوسيط
            mr: { xs: 0, md: 3 },
          }}
        >
          انضم الى شبكتنا من المتطوعين المتفائلين وساعد في إحداث تغيير إيجابي. معاً يمكننا بناء مستقبل أفضل للجميع.
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", 
            gap: 2,
            mt: 4,
            flexWrap: "wrap",
            justifyContent: "center", // يتوسط دائماً في الموبايل بفضل الـ alignItems للأب
          }}
        >
          <Link to="/conect" style={{ textDecoration: "none" }}>
            <ButtonJoin />
          </Link>
          <ButtonConect />
        </Box>
      </Box>
    </Box>
  );
}