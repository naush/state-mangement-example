import React, { useState } from 'react';

import { DarumaState, transit } from '../DarumaState';

import { makeStyles, } from '@material-ui/core/styles';

import Daruma from '../components/use-state/Daruma';
import Counter from '../components/use-state/Counter';

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
    setState(transit(state));
  };

  return (
    <>
      <div className={classes.icon}>
        <Daruma
          state={state}
          callback={callback}
        />
      </div>
      <Counter
        number={state}
      />
    </>
  );
}

export default UseState;
