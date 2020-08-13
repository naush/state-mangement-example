import React from 'react';

import { WishState } from '../../WishState';

type DarumaContextType = {
  state: WishState,
  dispatch: React.Dispatch<any>,
};

const DarumaContext = React.createContext({} as DarumaContextType);

export default DarumaContext;
