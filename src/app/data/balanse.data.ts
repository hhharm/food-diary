export const coeff = {
  passive: 1.2,
  slow: 1.37,
  middle: 1.55,
  high: 1.7,
  extreme: 1.9,
};

export interface BalanceData {
  input: {
    in: any;
    weight: number;
    activityCoeff: number;
  };
  stats: {
    gain: number;
    keep: number;
    lose: number;
  };
  constStats: {
    height: number;
    gender: 'f' | 'm';
    birthday: Date;
  };
}
export const balanceStartValue: BalanceData = {
  input: {
    in: 0,
    activityCoeff: coeff.passive,
    weight: 106,
  },
  stats: {
    gain: 0,
    keep: 0,
    lose: 0,
  },
  constStats: { height: 165, gender: 'f', birthday: new Date('09/17/1996') },
};
