import React, { useState } from 'react';

import {
  DarumaState,
  forward,
  backward,
} from '../DarumaState';

import Daruma from '../components/use-state/Daruma';
import Buttons from '../components/use-state/Buttons';

const UseState = () => {
  const [state, setState] = useState(DarumaState.PENDING);

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
