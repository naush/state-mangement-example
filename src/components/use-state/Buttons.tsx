import React from 'react';

import Box from '@material-ui/core/Box';
import BrushIcon from '@material-ui/icons/Brush';
import UndoIcon from '@material-ui/icons/Undo';

import { makeStyles, } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing(30),
  },
  icon: {
    border: '8px solid',
    borderRadius: '50%',
    fontWeight: 500,
    fontSize: theme.spacing(8),
    width: theme.spacing(11),
    height: theme.spacing(11),
    padding: theme.spacing(1),
    userSelect: 'none',
  },
}));

type ButtonsProps = {
  forward: () => void,
  backward: () => void,
};

const Buttons = ({
  forward,
  backward,
}: ButtonsProps) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
    >
      <UndoIcon
        className={classes.icon}
        onClick={backward}
      />
      <BrushIcon
        className={classes.icon}
        onClick={forward}
      />
    </Box>
  );
};

export default Buttons;
