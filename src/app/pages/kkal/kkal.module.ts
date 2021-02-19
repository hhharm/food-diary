import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BzuModule } from 'src/app/components/bzu/bzu.module';
import { SpeedModule } from 'src/app/components/speed/speed.module';
import { StatsComponent } from 'src/app/components/stats/stats.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { KkalRoutingModule } from './kkal-routing.module';
import { KkalComponent } from './kkal.component';

@NgModule({
  declarations: [KkalComponent, StatsComponent],
  imports: [
    CommonModule,
    KkalRoutingModule,
    BzuModule,
    SpeedModule,
    SharedModule,
  ],
})
export class KkalModule {}
