import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { card, darkblue } from "../../../color-main/color";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { useFadeIn } from "./useFadeIn";
export default function Section4() {
    const [ref, visible] = useFadeIn();

        const theme = useTheme();
    
  const data = [
    { icon:<FavoriteBorderOutlinedIcon/> , number: "المجتمع أولاً", text: "تُعطي كلُّ قراراتنا الأولوية لرفاه المجتمعات التي نخدمها ونموِّها." },
    {  icon: <RemoveRedEyeOutlinedIcon/>,number: "الشفافية", text: "التواصل المفتوح والمساءلة في جميع عملياتنا وعلاقاتنا." },
    { icon:<GroupOutlinedIcon/> , number: "الشمولية", text: "نرحب بالمتطوعين من كافة الخلفيات، معززين بذلك التنوع والشعور بالانتماء." },
    { icon:<StarBorderPurple500OutlinedIcon/> , number: "مدفوعٌ بالأثر", text: "نقيس النجاح بالتغييرات الإيجابية الملموسة التي نصنعها معاً." },
  ];

  return (
    <Box sx={{mt:16}} ref={ref}>
    <Typography
  sx={{
    fontSize: "16px",
    color: theme.palette.text.textcard,
    fontWeight: 600,
    mb: 1,
    display: "flex",
    justifyContent: "center",
    position: "relative", // 👈 مهم

    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -1, // المسافة تحت النص
      width: "22px",
      height: "1px",
      backgroundColor: "rgba(244, 185, 70, 1)",
      
    }
  }}
>
  ما يوجهنا
</Typography>
             <Typography
              sx={{
                 fontWeight: 700,
            fontSize: { xs: "16px", md: "28px" },
            color: theme.palette.text.secondary,
                mb: 5,
               alignItems:'center',
                display: 'flex',justifyContent:'center'
               
              }}
            >
قيمنا الجوهرية            </Typography>
    <Box
  sx={{
    display: "grid", 
    gridTemplateColumns: {
      xs: "1fr",
      md: "repeat(2, 476px)", // 👈 2 جنب بعض
    },
    gap: 4,
    justifyContent: "center",
  }}
>
      {data.map((item, index) => (
       <Card
  key={index}
  sx={{
    backgroundColor: theme.palette.primary.card,
    color: theme.palette.text.textcard,
    width: '100%',
    height: "97px",
    display: "flex",
    flexDirection: "row", // 👈 مهم (أفقي)
    alignItems: "center",
    borderRadius: "16px",opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0px)"
          : "translateY(40px)",
        transition: `all 0.5s ease ${index * 0.15}s`,
    
    px: 2
  }}
><CardContent
  sx={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    padding: "0 !important",
    width: "100%"
  }}
>
  

  {/* 👈 النص */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      textAlign: "right",
      flex: 1 // 🔥 مهم جداً
    }}
  >
    <Typography
      sx={{
        color: theme.palette.text.secondary,
        fontSize: "16px",
        fontWeight: "bold"
      }}
    >
      {item.number}
    </Typography>

    <Typography
      sx={{
        color: theme.palette.text.cardlight,
        fontSize: "14px"
      }}
    >
      {item.text}
    </Typography>
  </Box>
  <Box
    sx={{
      background: theme.palette.primary.chip,
      width: 48,
      height: 48,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "16px",
      color: darkblue,
      flexShrink: 0
    }}
  >
    {item.icon}
  </Box>
</CardContent>
        </Card>
      ))}
    </Box>
    </Box>
  );
}