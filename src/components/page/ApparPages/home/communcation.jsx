import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  Stack,
  IconButton,
  
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../../../../assets/image/logo/Logo Container.svg'
import { lighttext, mainColor } from "../../../color-main/color";
export default function Communication() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 16,
        width: '100%',height:'318px',
          bgcolor:theme.palette.primary.Appar2,
        color: 'white',
        py: 6,
        direction: 'ltr', // للتأكد من اتجاه النص من اليمين لليسار
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* القسم الأول: الشعار والوصف */}
          <Grid item xs={12} md={3}>
            <Stack spacing={0.2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img style={{width:'31px',height:'36px'}} src={logo}/>
                 <Box>
                    <Typography variant="h6" fontWeight="bold"  sx={{fontSize:'18px',color:mainColor}}>مؤسسة عَمّرها</Typography>
                    <Typography variant="caption" sx={{ display: 'block' ,fontSize:'12px',color:mainColor }}>Ammrha Foundation</Typography>
                 </Box>
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.8 ,fontSize:'14px',color:lighttext,mt:'-13px'}}>
                نربط المتطوعين الشغوفين بفرص هادفة.
              </Typography>
            </Stack>
          </Grid>

          {/* القسم الثاني: روابط سريعة */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom  sx={{fontSize:'14px',color:mainColor}}>
              روابط سريعة
            </Typography>
            <Stack spacing={1}>
              <Link
  component={RouterLink}
  to="/"
  underline="none"
  sx={{ color: theme.palette.text.cardlight }}
>
  الصفحة الرئيسية
</Link>

<Link
  component={RouterLink}
  to="/about-us"
  underline="none"
  sx={{ color: theme.palette.text.cardlight }}
>
  من نحن
</Link>

<Link
  component={RouterLink}
  to="/contact"
  underline="none"
  sx={{ color: theme.palette.text.cardlight }}
>
  تواصل معنا
</Link>

<Link
  component={RouterLink}
  to="/join"
  underline="none"
  sx={{ color: theme.palette.text.cardlight }}
>
  انضم إلينا
</Link>
</Stack>
          </Grid>

          {/* القسم الثالث: التواصل */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom  sx={{fontSize:'14px',color:mainColor}}>
              التواصل
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{fontSize:'14px',color:lighttext}}>+963988732372</Typography>
              <Typography variant="body2" sx={{fontSize:'14px',color:lighttext}}>+963968470410</Typography>
            </Stack>
          </Grid>

          {/* القسم الرابع: تابعنا */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom  sx={{fontSize:'14px',color:mainColor}}>
              تابعنا
            </Typography>
            <Stack direction="row" spacing={1}>
          <IconButton
           component="a"
  href="https://www.facebook.com/Ammrhafoundation"
  target="_blank"
  rel="noopener noreferrer"
                sx={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "1px",
                  bgcolor: "#1877F2",
                  color: "#fff",
                  "&:hover": { bgcolor: "#145db2" }
                }}
              >
                <FacebookIcon />
              </IconButton>

<IconButton
 component="a"
  href="https://www.instagram.com/ammrha_foundation?igsh=MXN1Mm1yYjV5N2dzOQ=="
  target="_blank"
  rel="noopener noreferrer"
                sx={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "1px",
                  bgcolor: "#E4405F",
                  color: "#fff",
                  "&:hover": { bgcolor: "#c13584" }
                }}
              >
                <InstagramIcon />
              </IconButton>

  <IconButton
           component="a"
  href="https://wa.me/963968470410"
  target="_blank"
  rel="noopener noreferrer"
                sx={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "1px",
                  bgcolor:"#25D366",

                  color: "#fff",
                  
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Stack>
          </Grid>

        </Grid>

        {/* حقوق النشر السفلية */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 5, pt: 3, textAlign: 'center' }}>
          <Typography variant="caption" sx={{ opacity: 0.6, color:'rgba(69, 85, 108, 1)' }}>
            © 2026 VolunteerHub. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}