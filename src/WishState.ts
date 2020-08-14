export enum WishState {
  PENDING   = 1,
  STARTED   = 2,
  FULFILLED = 3,
};

export const forward = (state: WishState) => {
  switch (state) {
    case WishState.PENDING:
      return WishState.STARTED;
    case WishState.STARTED:
      return WishState.FULFILLED;
    default:
      return WishState.PENDING;
  }
}

export const backward = (state: WishState) => {
  switch (state) {
    case WishState.FULFILLED:
      return WishState.STARTED;
    case WishState.STARTED:
      return WishState.PENDING;
    default:
      return WishState.PENDING;
  }
}
