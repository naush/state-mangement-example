import React from 'react';

import DarumaState from './DarumaState';

import { ReactComponent as DarumaPending } from './assets/DarumaPending.svg';
import { ReactComponent as DarumaStarted } from './assets/DarumaStarted.svg';
import { ReactComponent as DarumaFulfilled } from './assets/DarumaFulfilled.svg';

type DarumaProps = {
  state: DarumaState,
  callback: () => void,
};

const Daruma = ({
  state,
  callback,
}: DarumaProps) => {
  if (state === DarumaState.PENDING) {
    return (
      <DarumaPending
        onClick={callback}
      />
    );
  } else if (state === DarumaState.STARTED) {
    return (
      <DarumaStarted
        onClick={callback}
      />
    );
  }
  return (
    <DarumaFulfilled
      onClick={callback}
    />
  );
};

export default Daruma;
