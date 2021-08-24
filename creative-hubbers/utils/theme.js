import { createTheme } from '@material-ui/core';

const theme = createTheme({
  typography: {
    fontFamily: 'Lexend',
    h1: {
      fontFamily: 'Lexend',
      fontSize: '3.5rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    h2: {
      fontFamily: 'Lexend',
      fontSize: '1.7rem',
      fontWeight: 700,
      //   color: '#260401',
      marginBottom: '1rem',
    },
    h3: {
      fontFamily: 'Lexend',
      fontWeight: 700,
      fontSize: '1.4rem',
      marginBottom: '1rem',
    },
    h4: {
      fontFamily: 'Lexend',
      fontWeight: 700,
      fontSize: '1.2rem',
      marginBottom: '1rem',
    },
    h5: {
      fontFamily: 'Lexend',
      fontWeight: 600,
      color: '#260401',
      fontSize: '1.1rem',
      marginBottom: '1rem',
    },
    h6: {
      fontFamily: 'Lexend',
      fontWeight: 600,
      color: '#565656',
      fontSize: '1rem',
      marginBottom: '1rem',
    },
    p: {
      marginBlock: 0,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        color: '#fff',
      },
      containedPrimary: {
        color: '#fff',
      },
    },
  },
});
export default theme;
