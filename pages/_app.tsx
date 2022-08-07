import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Radio Canada',
      'Open Sans',
      'Gothic A1',
      'sans-serif',
    ].join(','),
  },});

export enum ActiveTab {
  ABOUT = 'About',
  SKILLS = 'Skills',
  EXPIRENCES = 'Expirences'
}
  
function MyApp({ Component, pageProps }: AppProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.ABOUT)
  return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} activeTab={activeTab} setActiveTab={setActiveTab} />
      </ThemeProvider>
    )
}

export default MyApp
