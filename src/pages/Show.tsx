import React from 'react';

import Box from '@material-ui/core/Box';

import { DarumaState, } from '../DarumaState';
import Daruma from '../components/show/Daruma';
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
          state={DarumaState.PENDING}
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
          state={DarumaState.STARTED}
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
          state={DarumaState.FULFILLED}
        />
        <Counter
          number={3}
        />
      </Box>
    </Box>
  );
}

export default Show;
