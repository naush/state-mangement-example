import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';

import DarumaState from './DarumaState';
import theme from './theme';

import {
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

import Daruma from './components/Daruma';
import Counter from './components/Counter';

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
  number: {
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
          <div className={classes.number}>
            <Counter
              number={state}
            />
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
