import React, { useReducer } from 'react';

import DarumaState from '../DarumaState';

import { makeStyles, } from '@material-ui/core/styles';

import Daruma from '../components/use-reducer/Daruma';
import Counter from '../components/use-reducer/Counter';

const useStyles = makeStyles(theme => ({
  icon: {
    width: theme.spacing(50),
    height: theme.spacing(50),
  },
}));

const reducer = (state: DarumaState, action: any) => {
  switch (state) {
    case DarumaState.PENDING:
      return DarumaState.STARTED;
    case DarumaState.STARTED:
      return DarumaState.FULFILLED;
    default:
      return DarumaState.PENDING;
  }
};

const UseReducer = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, DarumaState.PENDING);

  return (
    <>
      <div className={classes.icon}>
        <Daruma
          state={state}
          dispatch={dispatch}
        />
      </div>
      <Counter
        number={state}
      />
    </>
  );
}

export default UseReducer;
