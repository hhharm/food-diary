import { Pipe, PipeTransform } from '@angular/core';
import { Food, FoodKey } from 'src/app/data/food-history.data';

const FoodNameMap: Map<FoodKey, string> = new Map([
  ['PROTEIN', 'белок'],
  ['CARBS', 'углеводы'],
  ['FATS', 'жиры'],
  ['FIBER', 'клетчатка'],
  ['NYAMNYAM', 'вкусняшка'],
  ['WATER', 'вода'],
]);

@Pipe({
  name: 'parseFood',
})
export class ParseFoodPipe implements PipeTransform {
  transform(value: Food, ...args: unknown[]): string {
    const records: string[] = [];
    FoodNameMap.forEach((name, foodKey) => {
      const include = value[foodKey];
      if (include) {
        records.push(name);
      }
    });
    return records.join(', ');
  }
}
