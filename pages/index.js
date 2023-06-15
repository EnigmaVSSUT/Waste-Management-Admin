import { Box, Stack, Typography, TextField,FormControl,OutlinedInput,InputLabel,InputAdornment,IconButton, Button } from '@mui/material'
import { useState } from 'react';
import { Visibility,VisibilityOff } from '@mui/icons-material';
import Head from 'next/head'
import Image from 'next/image'
import LoginImage from '../public/LoginImage.svg'

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box sx={{height:"100vh",background:"#ffffff"}}>
      <Stack sx={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <Stack sx={{width:"450px",gap:"56px",boxShadow:"0px 2px 13px rgba(0, 0, 0, 0.25)",padding:"24px",margin:"40px",borderRadius:"20px"}}>
        <Typography variant="h4" color="black">Login</Typography>
        <Stack gap="24px">
        <TextField
          label="Username"  
          placeholder='ex: Prerit Agrawal'
          sx={{width: 300}}
        />
        <FormControl sx={{ width: 300 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            placeholder='ex: Abcd@1234'
          />
        </FormControl>   
        <Button variant="contained" color="primary" style={{backgroundColor:"#38BB6B",width: 300,borderRadius:"12px"}}>
          Submit
        </Button>
        </Stack>
      </Stack>
           <Image src={LoginImage} width={750}height={450}/>   
      </Stack>
    </Box >
  )
}
