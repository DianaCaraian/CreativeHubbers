import '../styles/globals.css';
import '@fontsource/lexend';
import Typography from "@material-ui/core/Typography";
import MainPage from '../Components/MainPage'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../utils/theme';
import Layout from '../Components/Layout';

function MyApp({ Component, pageProps }) {
 
    switch (Component.name) {
    case "Home":
      return (
      <ThemeProvider theme={theme}>
        <MainPage />   
      </ThemeProvider>
      )
    default:
      return (
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
            <Typography variant="h1">Hello</Typography>
          </Layout>
     </ThemeProvider>
      );
  }
};

export default MyApp;



