import { Pipe, PipeTransform } from '@angular/core';

const KKAL_IN_KG = 7000;

@Pipe({
  name: 'speed',
})
export class SpeedPipe implements PipeTransform {
  transform(intake: number, output: number): string {
    return `${(((output - intake) * 7) / KKAL_IN_KG).toFixed(2)}кг в неделю, ${(
      ((output - intake) * 30) /
      KKAL_IN_KG
    ).toFixed(2)}кг в месяц, ${(((output - intake) * 365) / KKAL_IN_KG).toFixed(
      2
    )}кг в год`;
  }
}
