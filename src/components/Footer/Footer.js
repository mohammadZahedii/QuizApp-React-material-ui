import React from 'react'
import Box from '@mui/material/Box'

const Footer =()=>{

    return(
        <Box
            sx={{textAlign:'center',mb:1.5,}}
        >
            follow my github account{" "}        
        <a
            href="https://github.com/mohammadZahedii/QuizApp-React-material-ui"
            style={{cursor:'pointer'}}
    
        >
            MohammadZahedii
        </a>
        
        
        </Box>


    )
}

export default Footer;