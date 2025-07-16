import { AccountCircle } from "@mui/icons-material"
import { Button } from "@mui/material"
import * as React from "react"
import useDisplay from "../../hooks/use-display"

const LoginButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    const display = useDisplay()
    return(
       <div className="ap-fixed ap-flex ap-justify-center ap-w-full ap-left-1/2 ap-z-[1000] ap-bottom-3 ap-transform ap--translate-x-1/2">
        <Button
            variant="contained"
            onClick={onClick}
            className={`ap-flex ap-justify-center ap-items-center ap-gap-1 ${display.smAndDown ? '!ap-text-[12px]' : '!ap-text-[15px]'}`}
            sx={{ 
                backgroundColor: "#2e89ff",
                color:  '#fff',
                padding: '7px 25px 7px 25px',
                textTransform: 'none', 
                fontWeight: 'normal',
                fontSize: '14px !important',
                boxShadow: 'none',
                // border: '1px solid #a4aab5',
                borderRadius: '25px',
                fontFamily: 'Poppins' 
            }}
        >
            <span>Conectarme </span>
        </Button>
       </div> 
    )
}
export default LoginButton;