import React from 'react'
import Box from '@mui/material/Box'
import {Link} from 'react-router-dom'

const Header =()=>{

    return(
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Link style={{textTransform:'uppercase',fontSize:'8vw',fontFamily:'Montserrat',cursor:'pointer'}} to="/">
                Intuitive Quiz Hub
            </Link>
            <hr style={{ margin:'10px',width:'100%',backgroundColor:'gray'}}/>
        </Box>
    )

}


export default Header;