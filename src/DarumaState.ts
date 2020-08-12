export enum DarumaState {
  PENDING   = 1,
  STARTED   = 2,
  FULFILLED = 3,
};

export const forward = (state: DarumaState) => {
  switch (state) {
    case DarumaState.PENDING:
      return DarumaState.STARTED;
    case DarumaState.STARTED:
      return DarumaState.FULFILLED;
    default:
      return DarumaState.FULFILLED;
  }
}

export const backward = (state: DarumaState) => {
  switch (state) {
    case DarumaState.FULFILLED:
      return DarumaState.STARTED;
    case DarumaState.STARTED:
      return DarumaState.PENDING;
    default:
      return DarumaState.PENDING;
  }
}
