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
export default function Section3() {
  const theme = useTheme();

  const data = [
  
    {
      image: image3,

      title: "مهمتنا",
      desc: " التمكين من خلال العمل ",
            desc1: "تمكين المجتمعات من خلال توفير فرص تطوعية مُيسَّرة ومُنظَّمة وذات أثرٍ فاعل، تُحدث تغييراً إيجابياً مستداماً للأفراد والمجتمع على حدٍ سواء.  "
    },
    {
      image: image2,

      title: "رؤيتنا",
      desc: "عالمٌ مترابط",
                  desc1: "عالمٌ تتاح فيه لكل فرد الفرصة والأدوات للمساهمة بشكلٍ فاعلٍ في مجتمعه، من خلال عملٍ تطوعيٍّ مُنظَّمٍ ومؤثِّر."

    },
  
  ];

  return (
    <Box sx={{ mt: 4 }}>
     

      {/* الكروت */}
      <Box
        sx={{
          display: "grid",
 gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(2, 472px)",
        },         gap: 3,
          justifyContent: "center"
        }}
      >
        {data.map((item, index) => (
         <Card
  key={index}
  sx={{

width: "100%",    height: "231px",
    borderRadius: "16px",
    backgroundColor: theme.palette.primary.card,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    
    // 1. تطبيق البوردر كما هو في الصورة (1px ولون rgba(57, 112, 121, 1))
    border: `1px  solid ${darkblue}`,

  
    borderRight: `4px solid ${theme.palette.text.textc}`,
    boxShadow: `
      0px 1px 2px -1px ${darkblue}, 
      0px 1px 3px 0px rgba(231, 222, 222, 0.1)
    `,
  }}
>
           
          
            {/* المحتوى */}
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "revert",
                textAlign: "right",
                flexGrow: 1,




                gap: 1
              }}
            >
              {/* العنوان */}
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.text.textt,
                  fontSize: "14px",alignItems:'rtl'
                }}
              >
                {item.title}
              </Typography>

              {/* الوصف */}
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "20px"
                }}
              >
                {item.desc}
              </Typography>
 {/* الوصف */}
              <Typography
                sx={{
                  color: theme.palette.text.textt,
                  fontSize: "14px"
                }}
              >
                {item.desc1}
              </Typography>
             
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}