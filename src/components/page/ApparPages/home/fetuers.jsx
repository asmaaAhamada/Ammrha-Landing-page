import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { card, darkblue } from "../../../color-main/color";
import { ThemeContext } from "@emotion/react";

export default function Fetuers() {
  const theme = useTheme();

  const data = [
    { number: "85", text: "المجتمعات التي نخدمها" },
    { number: "12.5k", text: " ساعة " },
    { number: "340", text: "فعالية مكتملة" },
    { number: "1,247", text: "متطوع " },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 3, // مهم عشان يطلع فوق
        mt: { xs: "-40px", md: "-60px" },
        px: { xs: 2, md: 0 },
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(4, 264px)",
        },
        gap: 2,
        justifyContent: "center",
      }}
    >
      {data.map((item, index) => (
      <Card
  key={index}
  sx={{
    backgroundColor: theme.palette.primary.card,
    color: theme.palette.text.textcard,
    width: { xs: "90%", md: "264px" }, // جعل العرض 90% على الموبايل ليكون أجمل
    margin: "0 auto", // لتوسيط الكرت في الموبايل
    height: "104px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "16px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)", // إضافة ظل خفيف لتبدو فوق الصورة
    overflow: "visible", // لضمان عدم قطع أي محتوى
  }}
>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" fontWeight="bold">
              {item.number}
            </Typography>

            <Typography variant="body2" sx={{ fontSize: "14px" }}>
              {item.text}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}