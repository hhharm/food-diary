import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BzuPipe } from './bzu.pipe';

@NgModule({
  declarations: [BzuPipe],
  imports: [CommonModule],
  exports: [BzuPipe],
})
export class BzuModule {}
