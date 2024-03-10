// src\frontend\src\components\pages\Product\Main\handler-events\calculator.ts

let result = 0;
export function handlerMinus(event: React.MouseEvent): void {
  event.stopPropagation();
  const targetType = (event.target as HTMLElement).dataset.type;
  console.log(`#1 [Product/Main][ProductMainFC][handlerMinus] Target:  ${targetType}`);

  if ((targetType !== undefined) && ((targetType).includes('minus'))) {
    result = ((result - 1) < 0) ? 0 : result - 1;
  } else if ((targetType as string).includes('plus')) {
    result = (result <= 9) ? result + 1 : 10;
  } else {
    return;
  }
  console.log(`#2 [Product/Main][ProductMainFC][handlerMinus] Result:  ${result}`);
  const calculator = document.querySelector('.btn-group > span');
  if ((calculator !== undefined) && (calculator !== null)) {
    calculator.innerHTML = String(result);
  }
}
