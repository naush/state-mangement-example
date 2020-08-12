import React from 'react';
import Box from '@material-ui/core/Box';

import { makeStyles, } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    border: '8px solid',
    borderRadius: '50%',
    fontWeight: 500,
    fontSize: theme.spacing(8),
    width: theme.spacing(11),
    height: theme.spacing(11),
    userSelect: 'none',
  },
}));

type CounterProps = {
  number: number,
};

const Counter = ({ number, }: CounterProps) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {number}
    </Box>
  );
};

export default Counter;
