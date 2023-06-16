import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from '@/Utils/Theme';
export default function App({ Component, pageProps }) {

  return(
    <>
    <ThemeProvider theme={Theme} >
    <Navbar/>
  <Component {...pageProps} />
  </ThemeProvider>
  </>
  )
}
