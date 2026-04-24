import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  useTheme
} from "@mui/material";import { Chip } from "@mui/material";

import image1 from '../../../../assets/image/ImageWithFallback-3.png'
import image2 from '../../../../assets/image/ImageWithFallback-2.png'
import image3 from '../../../../assets/image/ImageWithFallback-1.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { darkblue, white } from "../../../color-main/color";
export default function Ready() {
  const theme = useTheme();

  

  return (
    <>
<Box
  sx={{
    mt: 16,
    display: "flex",
    flexDirection: "column", // 👈 مهم
    justifyContent: "center",
    alignItems: "center" // 👈 توسيط أفقي
  }}
>      {/* العناوين */}
      <Typography
        sx={{
          fontSize: "28px",
          color: theme.palette.text.textcard,
          fontWeight: 600,
          mb: 1,
          display: "flex",
          justifyContent: "center"
        }}
      >
هل أنت مستعد لإحداث فرق؟      </Typography>

     <Typography
  sx={{
    fontWeight: 700,
    fontSize: { xs: "8px", md: "16px" },
                  color: theme.palette.text.textt,
    mb: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  }}
>
  <Box>انضم إلى مجتمعنا المتنامي من المتطوعين، وابدأ في إحداث تأثير إيجابي في</Box>

  <Box sx={{ mt: 0.5 }}>
    مجتمعك اليوم.
  </Box>
</Typography>

      <Button
                variant="contained"
                sx={{
                  width: { xs: "196px", md: "512px" },
                  height: "43px",
                  borderRadius: "12px",
                 fontSize:'16px',                color: white,
                 
                bgcolor: theme.palette.primary.button, display: "flex",
    justifyContent: "center",
    alignItems: "center"
                }}
              >
                اضغط هنا
              </Button>
    </Box>
    
              </>
  );
}