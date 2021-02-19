import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  FoodKey,
  getMealType,
  getTimeDifference,
  MealRecord,
} from 'src/app/data/food-history.data';
const storageKey = 'dairyRecords';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-day-count',
  styleUrls: ['./day-count.component.scss'],
  templateUrl: './day-count.component.html',
})
export class DayCountComponent implements OnInit {
  public log: MealRecord[] = [];
  public tmpRecord?: MealRecord | null;
  public saveDisabled = true;

  public displayedColumns = ['Date', 'Food', 'MealType'];

  constructor(private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    const value = localStorage.getItem(storageKey);
    this.log = value ? JSON.parse(value) : [];
    this.log.forEach((meal) => {
      meal.date = new Date(meal.date);
    });
    this.cdr.markForCheck();
  }

  public toggle(type: FoodKey): void {
    if (!this.tmpRecord) {
      this.tmpRecord = {
        date: new Date(),
        food: {
          CARBS: false,
          FATS: false,
          FIBER: false,
          NYAMNYAM: false,
          PROTEIN: false,
          WATER: false,
        },
        mealType: '',
        timeDifference: null,
      };
      this.saveDisabled = false;
    }

    this.tmpRecord.food[type] = !this.tmpRecord.food[type];
    this.cdr.markForCheck();
  }

  public save(): void {
    if (this.tmpRecord) {
      this.tmpRecord.date = new Date();
      this.tmpRecord.mealType = getMealType(this.tmpRecord.food);
      this.tmpRecord.timeDifference = this.log.length
        ? getTimeDifference(
            this.tmpRecord.date,
            this.log[this.log.length - 1].date
          )
        : null;
      this.log = [...this.log, this.tmpRecord];
      this.saveDisabled = true;
      localStorage.setItem(storageKey, JSON.stringify(this.log));
      this.tmpRecord = null;
      this.cdr.markForCheck();
    }
  }

  public undo(): void {
    if (this.log.length) {
      this.log.pop();
      this.log = [...this.log];
      localStorage.setItem(storageKey, JSON.stringify(this.log));
      this.cdr.markForCheck();
    }
  }

  public clear(): void {
    this.log = [];
    localStorage.removeItem(storageKey);
    this.cdr.markForCheck();
  }

  public trackByDateFn(index: number, element: MealRecord): Date {
    return element.date;
  }
}
