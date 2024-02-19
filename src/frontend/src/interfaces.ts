// src\frontend\src\interfaces.ts

export enum Pages {
  'Home' = '/',
  'Loader' = '/loader',
  'Contacts' = '/contacts',
  'Catalog' = '/catalog',
  'Cart' = '/cart',
  'About' = '/about',
  'Undefin' = '/404'
}

export enum PTitle {
  '/' = 'Главная',
  '/catalog' = 'Каталог',
  '/about' = 'О магазине',
  '/contacts' = 'Контакты'
}

export interface Child {
  children: JSX.Element
}
