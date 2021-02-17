import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Observable } from 'rxjs';
import { BalanceData, balanceStartValue } from 'src/app/data/balanse.data';
import { CalculationsService } from 'src/app/services/calculations.service';
import { LayoutOptions, LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent implements OnInit {
  public data: BalanceData = balanceStartValue;
  public isMobile$?: Observable<LayoutOptions>;

  get weight() {
    return this.data.input.weight;
  }

  set weight(newValue: number) {
    this.data.input.weight = newValue;
    this.calcStats();
  }

  changeCoeff(value: MatButtonToggleChange) {
    console.log(value);
    this.data.input.activityCoeff = value.value;
    this.calcStats();
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private calcs: CalculationsService,
    private layoutService: LayoutService
  ) {}

  public ngOnInit() {
    this.calcStats();
    this.isMobile$ = this.layoutService.isMobile$;
  }

  private calcStats(): void {
    this.data = {
      ...this.data,
      stats: this.calcs.calcStats(this.data),
    };
    this.cdr.markForCheck();
  }
}
