import React from 'react'
import Box from '@mui/material/Box'

export default function ErrorMessage({children}){
    return (
        <Box
            sx={{
                width:'100%',
                p:t=>t.spacing(1.5),
                mb:1.5,
                borderRadius:t=>t.shape,
                backgroundColor:'orangered',
                textAlign:'center',
                color:'white',
                textTransform:"capitalize"
            }}
        >
            {children}
        </Box>
    )
}