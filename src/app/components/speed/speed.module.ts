import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedPipe } from './speed.pipe';

@NgModule({
  declarations: [SpeedPipe],
  imports: [CommonModule],
  exports: [SpeedPipe],
})
export class SpeedModule {}
