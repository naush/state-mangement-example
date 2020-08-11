export enum DarumaState {
  PENDING   = 1,
  STARTED   = 2,
  FULFILLED = 3,
};

export const transit = (state: DarumaState) => {
  switch (state) {
    case DarumaState.PENDING:
      return DarumaState.STARTED;
    case DarumaState.STARTED:
      return DarumaState.FULFILLED;
    default:
      return DarumaState.PENDING;
  }
}
