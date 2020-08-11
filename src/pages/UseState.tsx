import React, { useState } from 'react';

import DarumaState from '../DarumaState';

import { makeStyles, } from '@material-ui/core/styles';

import Daruma from '../components/Daruma';
import Counter from '../components/Counter';

const useStyles = makeStyles(theme => ({
  icon: {
    width: theme.spacing(50),
    height: theme.spacing(50),
  },
}));

const UseState = () => {
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
    <>
      <div className={classes.icon}>
        <Daruma
          state={state}
          callback={callback}
        />
      </div>
      <div>
        <Counter
          number={state}
        />
      </div>
    </>
  );
}

export default UseState;
