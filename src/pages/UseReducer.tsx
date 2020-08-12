import React, { useReducer } from 'react';

import Actions from '../Actions';
import Daruma from '../components/use-reducer/Daruma';
import Counter from '../components/use-reducer/Counter';

import { DarumaState, forward } from '../DarumaState';

const reducer = (state: DarumaState, action: any) => {
  switch (action.type) {
    case Actions.TRANSIT:
      return forward(state);
    default:
      throw new Error();
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, DarumaState.PENDING);

  return (
    <>
      <Daruma
        state={state}
        dispatch={dispatch}
      />
      <Counter
        number={state}
      />
    </>
  );
}

export default UseReducer;
