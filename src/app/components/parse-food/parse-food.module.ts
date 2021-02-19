import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParseFoodPipe } from './parse-food.pipe';

@NgModule({
  declarations: [ParseFoodPipe],
  imports: [CommonModule],
  exports: [ParseFoodPipe],
})
export class ParseFoodModule {}
