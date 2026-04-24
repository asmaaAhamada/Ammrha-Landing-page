import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  useTheme,
  Chip
} from "@mui/material";
import image1 from '../../../../../assets/image/12.png';
import image2 from '../../../../../assets/image/13.jpg';
import image3 from '../../../../../assets/image/14.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { darkblue, white } from "../../../../color-main/color";
import { Link } from "react-router-dom";

export default function Keep() {
  const theme = useTheme();

  const data = [
    { id: 3, image: image3, date: "10 أيلول", title: "مستقبلك لوين", desc: "حين يقترن الشغف بالتوجيه السليم، يغدو المستقبل أكثر وضوحًا وإشراقًا." },
    { id: 2, image: image2, date: "20 تشرين الثاني", title: "يوم الطفل العالمي", desc: "نزرع بذور الفرح لنجني مستقبل مشرق يليق ببراءة الطفولة" },
    { id: 1, image: image1, date: "27 رمضان", title: "ليلة القدر", desc: "أمّا العطاء، فهو جوهر هذه الليلة؛" }
  ];

  // 1. تعريف الـ Keyframes للظهور التدريجي
  const appearanceKeyframes = {
    "@keyframes fadeInUp": {
      from: { opacity: 0, transform: "translateY(30px)" },
      to: { opacity: 1, transform: "translateY(0)" }
    }
  };

  return (
    <Box sx={{ mt: 16, ...appearanceKeyframes }}>
      <Typography
        sx={{
          fontSize: "16px",
          color: theme.palette.text.textcard,
          fontWeight: 600,
          mb: 1,
          position: "relative",
          display: 'flex',
          justifyContent: 'center',
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -0.3,
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

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(auto-fill, 348px)",
          },
          gap: 3,
          justifyContent: "center",
          px: 2
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
              overflow: "hidden",
              
              // --- التعديلات هنا ---
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", // سلاسة الحركة
              animation: `fadeInUp 0.6s ease-out forwards`, // أنميشن الظهور
              animationDelay: `${index * 0.2}s`, // ظهور الكروت واحد تلو الآخر
              opacity: 0, // يبدأ مخفي حتى يشتغل الأنميشن
              
              "&:hover": {
                transform: "translateY(-10px)", // يرتفع للأعلى عند الهوفر
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
                "& .card-image": { transform: "scale(1.1)" }, // تكبير الصورة
                "& .action-button": { bgcolor: theme.palette.primary.main } // تغيير لون الزر اختيارياً
              }
            }}
          >
            {/* الصورة */}
            <Box sx={{ position: "relative", width: "100%", height: "176px", overflow: "hidden" }}>
              <Box
                component="img"
                className="card-image"
                src={item.image}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease" // سلاسة تكبير الصورة
                }}
              />
              <Chip
                label={item.date}
                sx={{
                  position: "absolute", width: '108px', height: '24px',
                  top: 10, left: 10, backgroundColor: theme.palette.primary.text4, color: darkblue,
                  zIndex: 2
                }}
              />
            </Box>

            {/* المحتوى */}
            <CardContent
              sx={{
                display: "flex", flexDirection: "column", alignItems: "center",
                textAlign: "center", flexGrow: 1, gap: 1, p: 2
              }}
            >
              <Typography sx={{ fontWeight: "bold", color: theme.palette.text.secondary, fontSize: "16px" }}>
                {item.title}
              </Typography>

              <Typography sx={{ color: theme.palette.text.textt, fontSize: "14px", height: "40px", overflow: "hidden" }}>
                {item.desc}
              </Typography>

              <Link to={`/details/${item.id}`} style={{ textDecoration: 'none', marginTop: 'auto' }}>
                <Button
                  className="action-button"
                  variant="contained"
                  sx={{
                    width: "256px",
                    height: "40px",
                    borderRadius: "12px",
                    fontSize: '14px',
                    bgcolor: theme.palette.primary.button,
                    color: white,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      gap: "10px", // حركة بسيطة داخل الزر
                    }
                  }}
                >
                  <ArrowForwardIosIcon sx={{ transform: "rotate(180deg)", fontSize: '18px', mr: 2 }} />
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