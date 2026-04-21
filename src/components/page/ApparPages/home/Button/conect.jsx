import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { white } from "../../../../color-main/color";


export default function ButtonConect(){
    const theme = useTheme();
    return(
        <>
     <Button
variant="outlined"              sx={{
                width: '143px',
                height: '43px',
                borderRadius: '12px',
                borderColor: white,

                color: white,
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
               تواصل معنا
            </Button>
    </>
    )
}