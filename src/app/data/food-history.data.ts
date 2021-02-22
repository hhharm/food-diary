// todo: call them normally
export type FoodKey =
  | 'PROTEIN'
  | 'CARBS'
  | 'FATS'
  | 'FIBER'
  | 'NYAMNYAM'
  | 'WATER';
export type Food = Record<FoodKey, boolean>;

export interface MealRecord {
  date: Date;
  food: Food;
  mealType: string;
  timeDifference: string | null;
  commentary?: string;
}

type MealType = 'Основной приём пищи' | 'Перекус';
export const getMealType = (food: Food): MealType =>
  food.PROTEIN && food.FIBER && food.CARBS && food.FATS
    ? 'Основной приём пищи'
    : 'Перекус';

export const getTimeDifference = (now: Date, before: Date): string | null => {
  const minutesTotal = Math.floor((now.getTime() - before.getTime()) / 60000);
  const hours = Math.floor(minutesTotal / 60);
  const minutes = Math.floor(minutesTotal) % 60;
  const newDayOrSameMinute =
    (now.getDate() !== before.getDate() && hours > 10) ||
    (hours === 0 && minutes === 0);
  if (newDayOrSameMinute) {
    return null;
  }
  const hoursText =
    hours === 0
      ? ''
      : hours === 1
      ? ' час, '
      : hours > 4
      ? ' часов, '
      : ' часа, ';
  const minutesText =
    minutes === 1
      ? ' минуту'
      : minutes > 4 || minutes === 0
      ? ' минут'
      : ' минуты';
  return `спустя ${
    hoursText ? hours + hoursText : ''
  } ${minutes} ${minutesText}`;
};
