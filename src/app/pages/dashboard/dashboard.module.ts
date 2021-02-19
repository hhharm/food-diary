import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BzuModule } from '../../components/bzu/bzu.module';
import { SpeedModule } from '../../components/speed/speed.module';
import { StatsComponent } from 'src/app/components/stats/stats.component';
import { HistoryComponent } from 'src/app/components/history/history.component';
import { DayCountComponent } from 'src/app/components/day-count/day-count.component';
import { ParseFoodModule } from '../../components/parse-food/parse-food.module';

@NgModule({
  declarations: [DashboardComponent, HistoryComponent, DayCountComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    ParseFoodModule,
  ],
})
export class DashboardModule {}
