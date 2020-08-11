import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';
import Box from '@material-ui/core/Box';

import DarumaState from './DarumaState';
import theme from './theme';

import {
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

import Daruma from './Daruma';

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
  icon: {
    width: theme.spacing(50),
    height: theme.spacing(50),
  },
  circle: {
    border: '8px solid',
    borderRadius: '50%',
    fontWeight: 500,
    fontSize: theme.spacing(8),
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
}));

function App() {
  const classes = useStyles();
  const [state, setState] = useState(DarumaState.PENDING);

  const callback = () => {
    if (state === DarumaState.PENDING) {
      setState(DarumaState.STARTED);
    } else if (state === DarumaState.STARTED) {
      setState(DarumaState.FULFILLED);
    } else {
      setState(DarumaState.PENDING);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.app}>
        <header className={classes.header}>
          <div className={classes.icon}>
            <Daruma
              state={state}
              callback={callback}
            />
          </div>
          <Box
            className={classes.circle}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {state}
          </Box>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
