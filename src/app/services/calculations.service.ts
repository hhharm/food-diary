import { Injectable } from '@angular/core';
import { BalanceData } from '../data/balanse.data';

@Injectable({
  providedIn: 'root',
})
export class CalculationsService {
  constructor() {}
  /**
   * calcStats
   */
  public calcStats(data: BalanceData) {
    let keep = 0;
    const age =
      new Date().getFullYear() - data.constStats.birthday.getFullYear();
    if (data.constStats.gender === 'f') {
      keep = Math.round(
        (9.99 * data.input.weight +
          6.25 * data.constStats.height -
          4.92 * age -
          161) *
          data.input.activityCoeff
      );
    } else {
      keep = Math.round(
        (9.99 * data.input.weight +
          6.25 * data.constStats.height -
          4.92 * age +
          5) *
          data.input.activityCoeff
      );
    }
    return {
      ...data.stats,
      keep,
      gain: Math.round(keep * 1.2),
      lose: Math.round(keep * 0.8),
    };
  }
}
