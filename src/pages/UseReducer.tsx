import React, { useReducer } from 'react';

import { DarumaState, transit } from '../DarumaState';

import { makeStyles, } from '@material-ui/core/styles';

import Actions from '../Actions';
import Daruma from '../components/use-reducer/Daruma';
import Counter from '../components/use-reducer/Counter';

const useStyles = makeStyles(theme => ({
  icon: {
    width: theme.spacing(50),
    height: theme.spacing(50),
  },
}));

const reducer = (state: DarumaState, action: any) => {
  switch (action.type) {
    case Actions.TRANSIT:
      return transit(state);
    default:
      throw new Error();
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
