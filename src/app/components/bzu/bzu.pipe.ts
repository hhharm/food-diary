import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bzu',
})
export class BzuPipe implements PipeTransform {
  transform(kkal: number, ...args: unknown[]): string {
    const b = Math.round(kkal * 0.3);
    const u = Math.round(kkal * 0.6);
    const z = Math.round(kkal * 0.3);
    return `всего: ${kkal} ккал, б: ${Math.round(
      b / 4
    )}г (${b} ккал), ж: ${Math.round(z / 9)}г (${z} ккал), у: ${Math.round(
      u / 4
    )}г (${u} ккал)`;
  }
}
