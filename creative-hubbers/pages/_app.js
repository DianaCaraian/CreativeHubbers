import '../styles/globals.css';
import '@fontsource/lexend';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../utils/theme';
import Layout from '../Components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
