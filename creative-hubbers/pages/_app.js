import '../styles/globals.css';
import '@fontsource/lexend';
import Typography from "@material-ui/core/Typography";
import MainPage from '../Components/MainPage';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../utils/theme';
import Layout from '../Components/Layout';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from '../reducers';

import { Provider } from 'react-redux';

const store = createStore(allReducers, composeWithDevTools()); //composeWithDevTools is for the chrome extension
function MyApp({ Component, pageProps }) {
 
   switch (Component.name) {
    case "Home":
      return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
             <MainPage />   
          </ThemeProvider>
        </Provider>
      )
      default: 
      return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Layout>
            <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Provider>
     
      );
   }
};

export default MyApp;





