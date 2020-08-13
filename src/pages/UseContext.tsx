import React, { useReducer } from 'react';

import Actions from '../Actions';
import Daruma from '../components/use-context/Daruma';
import Buttons from '../components/use-context/Buttons';
import DarumaContext from '../components/use-context/DarumaContext';

import {
  WishState,
  forward,
  backward,
} from '../WishState';

const reducer = (state: WishState, action: any) => {
  switch (action.type) {
    case Actions.FORWARD:
      return forward(state);
    case Actions.BACKWARD:
      return backward(state);
    default:
      throw new Error();
  }
};

const UseContext = () => {
  const [state, dispatch] = useReducer(reducer, WishState.PENDING);

  return (
    <DarumaContext.Provider value={{ state, dispatch }}>
      <Daruma />
      <Buttons />
    </DarumaContext.Provider>
  );
}

export default UseContext;
