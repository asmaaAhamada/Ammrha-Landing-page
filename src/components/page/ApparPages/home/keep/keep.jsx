import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  useTheme
} from "@mui/material";import { Chip } from "@mui/material";

import image1 from '../../../../../assets/image/12.png'
import image2 from '../../../../../assets/image/13.jpg'
import image3 from '../../../../../assets/image/14.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { darkblue, white } from "../../../../color-main/color";
import { Link } from "react-router-dom";
export default function Keep() {
  const theme = useTheme();

  const data = [
  
    {
       id: 3,
      image: image3,
          date: "10 أيلول",

      title: "عنوان الفعالية",
      desc: "حين يقترن الشغف بالتوجيه السليم، يغدو المستقبل أكثر وضوحًا وإشراقًا."
    },
    {
       id: 2,
      image: image2,
          date: "20 تشرين الثاني",

      title: "يوم الطفل العالمي",
      desc: "نزرع بذور الفرح لنجني مستقبل مشرق يليق ببراءة الطفولة"
    },
    {
       id: 1,
      image: image1,
          date: "27 رمضان",

      title: "ليلة القدر",
      desc: "أمّا العطاء، فهو جوهر هذه الليلة؛"
    }
  ];

  return (
    <Box sx={{ mt: 16 }}>
      {/* العناوين */}
      <Typography
        sx={{
          fontSize: "16px",
          color: theme.palette.text.textcard,
          fontWeight: 600,
          mb: 1,position: "relative", // 👈 مهم

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
        ابق على إطلاع
      </Typography>

      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: "16px", md: "28px" },
          color: theme.palette.text.textc,
          mb: 5,
          display: "flex",
          justifyContent: "center"
        }}
      >
        أهم الفعاليات
      </Typography>

      {/* الكروت */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(auto-fill, 348px)",
        },
          gap: 3,
          justifyContent: "center"
        }}
      >
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: "100%",
              height: "330px",
              borderRadius: "16px",
              backgroundColor: theme.palette.primary.card,
              boxShadow: "2px 5px 2px rgba(2, 3, 3, 0.21)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden"
            }}
          >
            {/* الصورة */}
            <Box
  sx={{
    position: "relative",
    width: "100%",
    height: "176px" // مهم عشان نثبت مساحة الصورة
  }}
>
            <Box
              component="img"
              src={item.image}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                alignSelf: "center",
                
                
              }}
            />
           <Chip
  label={item.date}
  sx={{
    position: "absolute",width:'108px',height:'24px',
    top: 10,
    left: 10,backgroundColor:theme.palette.primary.text4,color:darkblue
  }}
/>
</Box>
            {/* المحتوى */}
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                flexGrow: 1,
                gap: 1
              }}
            >
              {/* العنوان */}
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.text.secondary,
                  fontSize: "16px",alignItems:'rtl'
                }}
              >
                {item.title}
              </Typography>

              {/* الوصف */}
              <Typography
                sx={{
                  color: theme.palette.text.textt,
                  fontSize: "14px"
                }}
              >
                {item.desc}
              </Typography>

              {/* الزر */}
              <Link to={`/details/${item.id}`} style={{ textDecoration: 'none' }} >
              <Button
                variant="contained"
                sx={{
                  width: "256px",
                  height: "48px",
                  borderRadius: "12px",
                  mt: "auto",fontSize:'16px',
                bgcolor: theme.palette.primary.button,                color: white,
                
                }}
              >
                <ArrowForwardIosIcon sx={{ transform: "rotate(180deg)", fontSize:'24px' ,mr:4 }} />
                قراءة المزيد
              </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}