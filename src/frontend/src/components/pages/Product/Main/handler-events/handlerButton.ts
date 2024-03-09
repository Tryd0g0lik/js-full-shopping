// src\frontend\src\components\pages\Product\Main\handler-events\handlerButton.ts

export function handlerButtom(event: React.MouseEvent): void {
  event.stopPropagation();
  window.location.href = process.env.REACT_APP_URL + ':' + process.env.REACT_APP_FPORT + '/card';
}
