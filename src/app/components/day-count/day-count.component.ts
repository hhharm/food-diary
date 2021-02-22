import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  FoodKey,
  getMealType,
  getTimeDifference,
  MealRecord,
} from 'src/app/data/food-history.data';
import { LayoutOptions } from 'src/app/services/layout.service';
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
  public comment = ' ';
  public isMobile$?: Observable<LayoutOptions>;

  public displayedColumns = ['Date', 'Food', 'MealType', 'Commentary'];

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
    }

    this.tmpRecord.food[type] = !this.tmpRecord.food[type];
    this.saveDisabled = !Object.values(this.tmpRecord.food).filter(Boolean)
      .length;
    this.cdr.markForCheck();
  }

  public save(): void {
    if (this.tmpRecord) {
      this.tmpRecord.date = new Date();
      this.tmpRecord.mealType = getMealType(this.tmpRecord.food);
      this.tmpRecord.commentary = this.comment;
      this.tmpRecord.timeDifference = this.log.length
        ? getTimeDifference(this.tmpRecord.date, this.log[0].date)
        : null;
      this.log = [this.tmpRecord, ...this.log];
      this.saveDisabled = true;
      localStorage.setItem(storageKey, JSON.stringify(this.log));
      this.tmpRecord = null;
      this.comment = ' ';
      this.cdr.markForCheck();
    }
  }

  public undo(): void {
    if (this.log.length) {
      this.log.shift();
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
