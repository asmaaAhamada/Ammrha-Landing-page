import React from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Container,
  Paper,
  Stack,
  IconButton,
  useTheme
} from "@mui/material";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';import MapIcon from '@mui/icons-material/Map';
import { darkblue, gray2, gray3, gray4, gray5, white } from '../../../color-main/color';


export default function Section2() {
  const theme = useTheme();

  // تنسيق مخصص للحقول لتبدو مثل الصورة
  const textFieldStyle = {
    
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",color:theme.palette.primary.text3,fontSize:'16px',
      backgroundColor: theme.palette.primary.imagcard,
      "& fieldset": { borderColor:gray5 ,color:theme.palette.primary.text3},
    },
    "& .MuiInputLabel-root": { textAlign: 'right', width: '100%', transformOrigin: 'right' },
    mb: 2
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8, direction: 'rtl' }}>
      <Grid container spacing={2}>
        
         <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: 'center', mb: 4 ,width:'366px' ,}}>
            <Typography variant="h5" fontWeight="bold"sx={{color:theme.palette.text.secondary,fontSize:'20px'}} gutterBottom>
              معلومات الاتصال
            </Typography>
            
            <Stack spacing={3} sx={{ mt: 4, alignItems: 'revert' }}>
              {/* العنوان */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, textAlign: 'right' }}>
                <IconButton  sx={{
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
                  <FmdGoodOutlinedIcon />
                </IconButton>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{color:theme.palette.text.secondary,fontSize:'13.5px'}}>عنوان</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{color:theme.palette.text.textlight}}>سوريا، دمشق، البرامكة</Typography>
                </Box>
                
              </Box>

              {/* البريد */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, textAlign: 'right' }}>
                 <IconButton  sx={{
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
                  <EmailOutlinedIcon />
                </IconButton>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold"  sx={{             color:theme.palette.text.secondary,fontSize:'13.5px'
}}    >بريد إلكتروني</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{color:theme.palette.text.textlight}}>ammrhafoundationsyria@gmail.com</Typography>
                </Box>
               
              </Box>

              {/* الهاتف */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, textAlign: 'right' }}>
                 <IconButton  sx={{
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
                  <CallOutlinedIcon />
                </IconButton>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold"            sx={{color:theme.palette.text.secondary, fontSize:'13.5px'}}      
>هاتف</Typography>
                  <Typography variant="body2"  dir="ltr" sx={{color:theme.palette.text.textlight}} >+1 (555) 123-4567</Typography>
                </Box>
               
              </Box>
            </Stack>
          </Box>

          {/* الخريطة التفاعلية التقريبية */}
          <Paper 
            elevation={0} 
            sx={{ 
              height: '224px', width:{xs: "100%",md:'366px'},
              bgcolor: '#f0f5fa', 
              borderRadius: '24px', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center',
              border: '1px solid #e0eaf5'
            }}
          >
            <FmdGoodOutlinedIcon sx={{ fontSize: 40, color: '#adc2d6', mb: 1 }} />
            <Typography color="#adc2d6" fontWeight="medium">Interactive Map</Typography>
          </Paper>
        </Grid>
        {/* القسم الأيمن: أرسل رسالة */}
        <Grid item xs={12} md={7}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: '16px', border: '1px solid  rgba(226, 232, 240, 1)', bgcolor: theme.palette.primary.card ,height:'534px' ,

          }}>
            <Typography sx={{color:theme.palette.text.secondary ,fontSize:'20px'}} variant="h5" fontWeight="bold" gutterBottom textAlign="right">
أرسِل رسالة            </Typography>
            
            <Grid container spacing={2} sx={{ mt: 2 }}> 
                 <Grid item xs={12} sm={6}>
                <Typography sx={{color:theme.palette.text.secondary ,fontSize:'13.5px'}} variant="body2" gutterBottom >بريد إلكتروني</Typography>
                <TextField fullWidth placeholder="john@example.com" variant="outlined" sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{color:theme.palette.text.secondary ,fontSize:'13.5px'}} variant="body2" gutterBottom >الاسم الكامل</Typography>
                <TextField fullWidth placeholder="ادخل اسمك" variant="outlined" sx={textFieldStyle} />
              </Grid>
             
            </Grid>

            <Typography variant="body2" gutterBottom sx={{color:theme.palette.text.secondary ,fontSize:'13.5px'}}>العنوان</Typography>
            <TextField fullWidth placeholder="كيف يمكننا المساعدة؟" variant="outlined" sx={textFieldStyle} />

            <Typography variant="body2" gutterBottom sx={{color:theme.palette.text.secondary ,fontSize:'13.5px'}}>الرسالة</Typography>
            <TextField 
              fullWidth 
              placeholder="اكتب رسالتك هنا..." 
              variant="outlined" 
              multiline 
              rows={5} 
              sx={textFieldStyle} 
            />

            <Button 
              fullWidth 
              variant="contained" 
              sx={{ 
 bgcolor: theme.palette.primary.button,height:'43px',
                color: white,                py: 1.5, 
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                "&:hover": { bgcolor: "#4d5780" }
              }}
            >
              ارسال
            </Button>
          </Paper>
        </Grid>

        {/* القسم الأيسر: معلومات الاتصال والخريطة */}
       

      </Grid>
    </Container>
  );
}