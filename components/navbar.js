import { Stack, Typography, Button,IconButton,SwipeableDrawer,List,ListItem,Divider,AppBar,Box } from "@mui/material";
import Image from "next/image";
import logo from '../public/Logo.svg'
import { useRouter } from "next/router";
import FormatAlignLeftIcon  from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
export default function Navbar(){
  const [open, setOpen] = useState(false);
  const router = useRouter();
    return( 
  <AppBar elevation={1}  sx={{
    position:"relative",
    top:"0",left:"0",
        padding:{sm:"0px 30px",xs:"0px 10px"},
        flexDirection:"row",justifyContent:"space-between",
        background:"transparent",
        backdropFilter:'blur(30px)',
        
   }}>
    <Stack direction="row" alignItems="center" gap="10px">
    <Image src={logo} width={80} height={80}  />
    <Typography sx={{fontSize:{md:"24px",xs:"16px"},fontWeight:"500"}} >ADMIN PANEL</Typography>
    </Stack>
    <Box sx={{display:{xs:"none",md:"flex"},flexDirection:"row",gap:"30px",alignItems:"center"}}>
    <Typography variant="body1" color="black" sx={{fontWeight:"500",fontSize:{xs:"14px",sm:"16px"}}}>HOME</Typography>
    <Button variant="contained" color="primary" sx={{color:"#ffffff",borderRadius:"10px",fontSize:{xs:"14px",sm:"16px"},display:router.route==="/"?"none":"block"}}>
    <a href="/" >Admin Login</a>
     </Button>
    <Button variant="contained" color="primary" sx={{color:"#ffffff",borderRadius:"10px",fontSize:{xs:"14px",sm:"16px"},display:router.route==="/register"?"none":"block"}}>
    <a href="/register" >Admin Register</a>
     </Button>
    </Box>
    <IconButton sx={{ display: { md: "none" } }}>
          <FormatAlignLeftIcon onClick={() => setOpen(true)}  />
    </IconButton>
    <SwipeableDrawer
     PaperProps={{
        sx: {
          background: "white",
          width: "200px",
          display:open? "flex":"none",
        },
      }}
      open={open}
      anchor="right"
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}>
        <div>
            <IconButton>
              <ChevronRightIcon onClick={() => setOpen(false)} sx={{color:"black"}} />
            </IconButton>
          </div>
          <Divider sx={{backgroundColor:"white"}} />
          <List>
            <ListItem>
            <Typography sx={{color:"black",fontWeight:"700"}}>
          <a href="/home" onClick={()=>setOpen(false)} >HOME</a>
       </Typography>
            </ListItem>
            <ListItem>
            <Button variant="contained" color="primary" sx={{color:"#ffffff",borderRadius:"10px",fontSize:{xs:"14px",sm:"16px"},display:router.route==="/"?"none":"block"}} onClick={()=>setOpen(false)} >
    <a href="/" >Admin Login</a>
     </Button>
            </ListItem>
           <ListItem>
           <Button variant="contained" color="primary" sx={{color:"#ffffff",borderRadius:"10px",fontSize:{xs:"14px",sm:"16px"},display:router.route==="/register"?"none":"block"}} onClick={()=>setOpen(false)}>
    <a href="/register" >Admin Register</a>
     </Button>
           </ListItem>
          </List>
    </SwipeableDrawer>
   </AppBar>  
    )
}