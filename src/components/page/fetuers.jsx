import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { card, darkblue } from "../color-main/color";
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
        mt: { xs: "-50px", md: "-60px" }, // 🔥 هذا السر
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
            fontSize: "28px",
            backgroundColor: theme.palette.primary.card,
            color: theme.palette.text.textcard,
            width: { xs: "100%", md: "264px" },
            height: "104px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "16px",
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