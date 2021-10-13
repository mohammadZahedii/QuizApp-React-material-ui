import React from 'react'
import Box from '@mui/material/Box'
import Image from './quiz.png'
import Typography from '@mui/material/Typography'
import {TextField} from '@mui/material'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Categories from './../../Categories/Categories'

console.log(Categories)
const Home =()=>{

    return(
        <Grid container spacing={1} sx={{flexDirection:['column','column','row-reverse']}}>
            <Grid item xs={12} md={6}>
                <img src={Image} style={{width:'100%'}} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{p:t=>t.spacing(1),my:t=>t.spacing(1),mr:t=>t.spacing(1),display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
                    <Typography gutterBottom component="span" variant="h4" sx={{display:'flex',justifyContent:'center'}}>Quiz Settings</Typography>
                    <Box sx={{width:'100%',m:t=>t.spacing(1),px:t=>t.spacing(2)}}>
                        <TextField fullWidth label="Enter your Name" variant="outlined" sx={{mb:t=>t.spacing(2)}}/>
                        <TextField fullWidth select label="Select Category" variant="outlined" sx={{mb:t=>t.spacing(2)}}>
                            {
                                Categories.map(cat=>(
                                    <MenuItem value={cat.value}  key={cat.category}>{cat.category}</MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField fullWidth select label="Select Difficulty" variant="outlined" sx={{mb:t=>t.spacing(2)}}>
                            <MenuItem value="easy">Easy</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="hard">Hard</MenuItem>
                        </TextField>
                        <Button variant="contained" color="primary" fullWidth size="large">
                            Start Quiz
                        </Button>
                    </Box>
                </Box>
            </Grid>
     
        </Grid>
    )
}

export default Home;