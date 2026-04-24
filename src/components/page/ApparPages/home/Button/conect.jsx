import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { white } from "../../../../color-main/color";
import { Link } from "react-router-dom";


export default function ButtonConect(){
    const theme = useTheme();
    return(
        <>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
     <Button
variant="outlined"              sx={{
                width: {xs:'113px',md:'143px'},
                height: '43px',
                borderRadius: '12px',
                borderColor: white,

                color: white,
  fontSize: { xs: '13px', sm: '16px' },
                fontWeight: 'bold',flexShrink: 0,
              }}
            >
               تواصل معنا
            </Button>
            </Link>
    </>
    )
}