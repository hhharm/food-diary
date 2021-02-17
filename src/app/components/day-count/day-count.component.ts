import { Component, OnInit } from '@angular/core';

// todo: call them normally
enum FoodType {
  BELOK = 0,
  UGLI = 1,
  ZHIRI = 2,
  KLETKI = 3,
  NYAMNYAM = 4,
  WATER = 5,
}
interface MealRecord {
  date: Date;
  food: string;
}
@Component({
  selector: 'app-day-count',
  templateUrl: './day-count.component.html',
  styleUrls: ['./day-count.component.scss'],
})
export class DayCountComponent implements OnInit {
  constructor() {}
  public log: MealRecord[] = [];

  ngOnInit(): void {}
  select(type: FoodType) {
    this.log = [...this.log, { date: new Date(), food: FoodType[type] + ' ' }];
  }
  trackByDateFn(index: number, element: MealRecord): Date {
    return element.date;
  }
}
