import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';

import theme from './theme';

import {
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

import Show from './pages/Show';
// import UseState from './pages/UseState';
// import UseReducer from './pages/UseReducer';

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
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.app}>
        <header className={classes.header}>
          <Show />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
