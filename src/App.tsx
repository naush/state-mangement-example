import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';

import theme from './theme';

import {
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

import UseState from './pages/UseState';

const useStyles = makeStyles(theme => ({
  app: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: red[800],
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.app}>
        <header className={classes.header}>
          <UseState />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
