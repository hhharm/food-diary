import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateralModule } from './materal.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, MateralModule, FormsModule],
  exports: [MateralModule, FormsModule],
})
export class SharedModule {}
