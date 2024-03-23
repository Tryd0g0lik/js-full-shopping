// src\frontend\src\components\pages\Product\Main\handler-events\calculator.ts

let result = 0;
export function handlerMinus(event: React.MouseEvent): void {
  event.stopPropagation();
  const targetType = (event.target as HTMLElement).dataset.type;

  if ((targetType !== undefined) && ((targetType).includes('minus'))) {
    result = ((result - 1) < 0) ? 0 : result - 1;
  } else if ((targetType !== undefined) && (targetType as string).includes('plus')) {
    result = (result <= 9) ? result + 1 : 10;
  } else {
    return;
  }

  const calculator = document.querySelector('.btn-group > span');
  if ((calculator !== undefined) && (calculator !== null)) {
    calculator.innerHTML = String(result);
  }
}
