import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';

import { DarumaState } from '../../DarumaState';
import { ReactComponent as DarumaPending } from '../../assets/DarumaPending.svg';
import { ReactComponent as DarumaStarted } from '../../assets/DarumaStarted.svg';
import { ReactComponent as DarumaFulfilled } from '../../assets/DarumaFulfilled.svg';

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.spacing(40),
  },
}));

type DarumaProps = {
  state: DarumaState,
  callback: () => void,
};

const Daruma = ({
  state,
  callback,
}: DarumaProps) => {
  const classes = useStyles();
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
      className={classes.root}
      onClick={callback}
    />
  );
};

export default Daruma;
