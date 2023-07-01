import { Box, Stack, Typography, TextField,FormControl,OutlinedInput,InputLabel,InputAdornment,IconButton, Button } from '@mui/material'
import { useState } from 'react';
import { Visibility,VisibilityOff } from '@mui/icons-material';
import Head from 'next/head'
import Image from 'next/image'
import LoginImage from '../public/LoginImage.svg'
import Logo from '../public/Logo.svg'
export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [username,setUsername] =  useState("")
  const [password,setPassword] =  useState("")
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = ()=>{
    console.log(username,password)
  }

  return (
    <Box sx={{margin:"8vmax auto"}} >
       <Head>
      <title>Login</title>
      </Head>
      <Stack sx={{flexDirection:{md:"row",xs:"column"},justifyContent:"center",alignItems:"center"}}>
      <Stack sx={{width:{sm:"350px",xs:"320px"},gap:"56px",boxShadow:"0px 2px 13px rgba(0, 0, 0, 0.25)",padding:"24px",margin:"40px",borderRadius:"20px"}}>
        <Typography variant="h4" color="black">Login</Typography>
        <Stack gap="24px">
        <TextField
          label="Username"  
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          placeholder='ex: Prerit Agrawal'
          sx={{width: 270}}
        />
        <FormControl sx={{ width: 270 }} variant="outlined">
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
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder='ex: Abcd@1234'
          />
        </FormControl>   
        <Button variant="contained" color="primary" style={{width: 270,borderRadius:"12px",color:"#ffffff"}} onClick={handleSubmit}>
        <a href="../pages/complaindashboard.js">login</a> 
        </Button>
        </Stack>
      </Stack>
          <Box sx={{display:{xs:"none",sm:"block"}}}>
          <Image src={LoginImage} width={650}height={450}/> 
            </Box>  
      </Stack>
    </Box >
  )
}
