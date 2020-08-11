import React from 'react';

import { DarumaState } from '../../DarumaState';
import { ReactComponent as DarumaPending } from '../../assets/DarumaPending.svg';
import { ReactComponent as DarumaStarted } from '../../assets/DarumaStarted.svg';
import { ReactComponent as DarumaFulfilled } from '../../assets/DarumaFulfilled.svg';

type DarumaProps = {
  state: DarumaState,
  callback: () => void,
};

const Daruma = ({
  state,
  callback,
}: DarumaProps) => {
  let Icon;

  switch (state) {
    case DarumaState.PENDING:
      Icon = DarumaPending;
      break;
    case DarumaState.STARTED:
      Icon = DarumaStarted;
      break;
    default:
      Icon = DarumaFulfilled;
  };

  return (
    <Icon
      onClick={callback}
    />
  );
};

export default Daruma;
