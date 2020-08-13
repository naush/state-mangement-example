import React from 'react';

import Box from '@material-ui/core/Box';
import BrushIcon from '@material-ui/icons/Brush';
import UndoIcon from '@material-ui/icons/Undo';

import Actions from '../../Actions';
import DarumaContext from './DarumaContext';

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

const Buttons = () => {
  const classes = useStyles();
  const { dispatch, } = React.useContext(DarumaContext);

  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
    >
      <UndoIcon
        className={classes.icon}
        onClick={() => dispatch({ type: Actions.UNDO })}
      />
      <BrushIcon
        className={classes.icon}
        onClick={() => dispatch({ type: Actions.PAINT })}
      />
    </Box>
  );
};

export default Buttons;
