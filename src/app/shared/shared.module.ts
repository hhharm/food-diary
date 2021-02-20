import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MateralModule } from './materal.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MateralModule, FormsModule, FlexLayoutModule],
  exports: [MateralModule, FormsModule, FlexLayoutModule],
})
export class SharedModule {}
