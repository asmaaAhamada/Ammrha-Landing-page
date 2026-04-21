import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { card, darkblue } from "../../../color-main/color";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
export default function Attribuits() {
        const theme = useTheme();
    
  const data = [
    { icon:<CorporateFareOutlinedIcon/> , number: "تسجيل سهل", text: " عملية تسجيل سريعة عبر تطبيق الهاتف المحمول ,مع إرشادات توجيهية لخطوات البدء" },
    {  icon: <TrendingUpOutlinedIcon/>,number: "إدارة الفعاليات", text: " ننظم الفعاليات التطوعية ونتبعها بالتنسيق في الوقت الفعلي " },
    { icon:<CalendarTodayOutlinedIcon/> , number: "مراقبة الأداء", text: " نراقب المشاركة ,التقييمات ومقاييس نمو المتطوعين" },
    { icon:<PeopleAltOutlinedIcon/> , number: "تنظيم الفريق", text: "إدارة منظمة للأقسام وسير عمل للمهام " },
  ];

  return (
    <>
     <Typography
              sx={{
                fontSize: "16px",
                color: theme.palette.text.textcard,
                fontWeight: 600,
                mb: 1,
               alignItems:'center',    position: "relative", // 👈 مهم

                display: 'flex',justifyContent:'center', "&::after": {
      content: '""',
      position: "absolute",
      bottom: -0.3, // المسافة تحت النص
      width: "22px",
      height: "1px",
      backgroundColor: "rgba(244, 185, 70, 1)",
      
    }
               
              }}
            >
السمات            </Typography>
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
              كل ماتحتاجه للتطوع 
            </Typography>
    <Box
      sx={{
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
            fontSize:'28px',
            backgroundColor:theme.palette.primary.card,
            color:theme.palette.text.textcard,
            width: { xs: "100%", md: "258px" },
            height: "214px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: '16px',boxShadow:'2px 5px  2px rgba(2, 3, 3, 0.21)'
          }}
        >
<CardContent
  sx={{
    display: "flex",
    flexDirection: "column",   //  ترتيب عمودي
    alignItems: "center",      //  توسيط أفقي
    justifyContent: "center",  //  توسيط عمودي (اختياري)
    textAlign: "center",
    gap: 2,                    // مسافة بين العناصر
  }}
>            <Box
                        
                         
                          sx={{
                            background:theme.palette.primary.chip,
                            width: 56,
                            height: 56, display: "flex",              //  مهم
    justifyContent: "center",     // توسيط أفقي
    alignItems: "center",
                            borderRadius: '16px',color:darkblue
                          }}
                        >
                                          {item.icon}

                            </Box>
            <Typography  fontWeight="bold" sx={{            color: theme.palette.text.secondary,fontSize:'16px'
}}>
              {item.number}
            </Typography>

            <Typography   sx={{            color: theme.palette.text.cardlight,fontSize:'14px'
}}>
              {item.text}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
    </>
  );
}