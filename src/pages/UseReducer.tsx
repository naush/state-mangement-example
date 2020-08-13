import React, { useReducer } from 'react';

import Actions from '../Actions';
import Daruma from '../components/Daruma';
import Buttons from '../components/use-reducer/Buttons';

import {
  WishState,
  forward,
  backward,
} from '../WishState';

const reducer = (state: WishState, action: any) => {
  switch (action.type) {
    case Actions.PAINT:
      return forward(state);
    case Actions.UNDO:
      return backward(state);
    default:
      throw new Error();
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, WishState.PENDING);

  return (
    <>
      <Daruma
        state={state}
      />
      <Buttons
        dispatch={dispatch}
      />
    </>
  );
}

export default UseReducer;
