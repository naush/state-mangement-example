import React from 'react';

import Box from '@material-ui/core/Box';

import { WishState, } from '../WishState';
import Daruma from '../components/Daruma';
import Counter from '../components/show/Counter';

const Show = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Daruma
          state={WishState.PENDING}
        />
        <Counter
          number={1}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Daruma
          state={WishState.STARTED}
        />
        <Counter
          number={2}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Daruma
          state={WishState.FULFILLED}
        />
        <Counter
          number={3}
        />
      </Box>
    </Box>
  );
}

export default Show;
