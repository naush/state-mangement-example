import React, { useState } from 'react';

import { DarumaState, transit } from '../DarumaState';

import Daruma from '../components/use-state/Daruma';
import Counter from '../components/use-state/Counter';

const UseState = () => {
  const [state, setState] = useState(DarumaState.PENDING);

  const callback = () => {
    setState(transit(state));
  };

  return (
    <>
      <Daruma
        state={state}
        callback={callback}
      />
      <Counter
        number={state}
      />
    </>
  );
}

export default UseState;
