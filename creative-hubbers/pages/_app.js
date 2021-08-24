import '../styles/globals.css';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../utils/theme';
import Layout from '../Components/Layout';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from '../reducers';

import { Provider } from 'react-redux';

const store = createStore(allReducers, composeWithDevTools()); //composeWithDevTools is for the chrome extension
function MyApp({ Component, pageProps }) {
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

export default MyApp;
