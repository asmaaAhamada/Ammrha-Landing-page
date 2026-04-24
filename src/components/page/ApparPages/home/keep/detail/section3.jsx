import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { card, darkblue, mainColor } from "../../../../../color-main/color";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import logo from '../../../../../../assets/image/logo/45.png'
import image from '../../../../../../assets/image/ramadan/11.png'
import { detailsData } from "./data";

export default function Section3({id}) {
          const data = detailsData[id];
    
        const theme = useTheme();
    
 

  return (
    <>
     <Typography
              sx={{
                fontSize: "16px",
                color: theme.palette.text.textcard,
                fontWeight: 600,
                mb: 1,
               alignItems:'center',    position: "relative", //  مهم

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
الجهات المشاركة           </Typography>
            
    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
flexDirection: { xs: "column", md: "row" },          mt: 3,
        }}
      >
        {/* بوكس 1 - 128x128 */}
        <Box
        component="img"
                  src={data.company2}
                  alt="volunteers"
          sx={{
            width: "128px",
            height: "128px",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
          

      <Box
    sx={{
      width: "212px",
      height: "74px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      gap: 1,
      px: 1,
    }}
  >
    

              
  <Box
      component="img"
                  src={data.company1}
      alt="logo"
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
    />
    
  </Box>
          
      </Box>
    </>
  );
}