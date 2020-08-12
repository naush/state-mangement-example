import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';

import { WishState } from '../WishState';
import { ReactComponent as DarumaPending } from '../assets/DarumaPending.svg';
import { ReactComponent as DarumaStarted } from '../assets/DarumaStarted.svg';
import { ReactComponent as DarumaFulfilled } from '../assets/DarumaFulfilled.svg';

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.spacing(40),
  },
}));

type DarumaProps = {
  state: WishState,
};

const Daruma = ({
  state,
}: DarumaProps) => {
  const classes = useStyles();
  let Icon;

  switch (state) {
    case WishState.PENDING:
      Icon = DarumaPending;
      break;
    case WishState.STARTED:
      Icon = DarumaStarted;
      break;
    default:
      Icon = DarumaFulfilled;
  };

  return (
    <Icon
      className={classes.root}
    />
  );
};

export default Daruma;
