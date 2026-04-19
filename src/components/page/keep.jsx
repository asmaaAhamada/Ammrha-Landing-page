import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  useTheme
} from "@mui/material";
import image1 from '../../assets/image/ImageWithFallback-3.png'
import image2 from '../../assets/image/ImageWithFallback-2.png'
import image3 from '../../assets/image/ImageWithFallback-1.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Keep() {
  const theme = useTheme();

  const data = [
  
    {
      image: image3,
      title: "عنوان الفعالية",
      desc: "وصف مختصر عن الفعالية أو النشاط التطوعي"
    },
    {
      image: image2,
      title: "عنوان الفعالية",
      desc: "وصف مختصر عن الفعالية أو النشاط التطوعي"
    },
    {
      image: image1,
      title: "عنوان الفعالية",
      desc: "وصف مختصر عن الفعالية أو النشاط التطوعي"
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
          mb: 1,
          display: "flex",
          justifyContent: "center"
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
          gridTemplateColumns: "repeat(auto-fill, 348px)",
          gap: 3,
          justifyContent: "center"
        }}
      >
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: "348px",
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
              component="img"
              src={item.image}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                alignSelf: "center",
                
                
              }}
            />

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
              <Button
                variant="contained"
                sx={{
                  width: "265px",
                  height: "48px",
                  borderRadius: "12px",
                  mt: "auto",fontSize:'16px',
                bgcolor: theme.palette.primary.button,
                }}
              >
                <ArrowForwardIosIcon sx={{ transform: "rotate(180deg)", fontSize:'24px' ,mr:4 }} />
                قراءة المزيد
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}