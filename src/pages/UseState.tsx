import React, { useState } from 'react';

import {
  WishState,
  forward,
  backward,
} from '../WishState';

import Daruma from '../components/Daruma';
import Buttons from '../components/use-state/Buttons';

const UseState = () => {
  const [state, setState] = useState(WishState.PENDING);

  return (
    <>
      <Daruma
        state={state}
      />
      <Buttons
        forward={() => setState(forward(state))}
        backward={() => setState(backward(state))}
      />
    </>
  );
}

export default UseState;
