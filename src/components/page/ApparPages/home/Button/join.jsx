import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { white } from "../../../../color-main/color";
import { Link } from "react-router-dom";


export default function ButtonJoin(){
  const theme = useTheme();
    return(
        <>
                <Link to="/Join" style={{ textDecoration: 'none' }}>
        
     <Button
              variant="contained"
             sx={{
  width: { xs: '110px', sm: '143px' },flexShrink: 0,
  height: '43px',
  borderRadius: '12px',
  bgcolor: theme.palette.primary.button,
  color: white,
  fontSize: { xs: '13px', sm: '16px' },
  fontWeight: 'bold',
}}>
              انضم إلينا
            </Button>
            </Link>
    </>
    )
}