import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { white } from "../../../../color-main/color";


export default function ButtonJoin(){
  const theme = useTheme();
    return(
        <>
     <Button
              variant="contained"
              sx={{
                width: '143px',
                height: '43px',
                borderRadius: '12px',
                bgcolor: theme.palette.primary.button,
                color: white,
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              انضم إلينا
            </Button>
    </>
    )
}