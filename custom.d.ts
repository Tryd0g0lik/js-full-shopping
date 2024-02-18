/**
 * Typescript ERROR: 'Не удается найти модуль "@Img/header-logo.png" 
 *    или связанные с ним объявления типов.ts(2307)'
 * How can it fix: https://github.com/damianstasik/vue-svg-loader/issues/92#issuecomment-533822872
 */
declare module '@Img/*' {
  const content: string;
  export default content;
}

declare module '@Root' {
  const content: any;
  export default content;
}
