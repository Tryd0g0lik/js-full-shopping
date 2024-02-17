export interface Child {
  children: JSX.Element
}

export enum Pages {
  'Home' = '/',
  'Loader' = '/loader',
  'Contacts' = './contacts',
  'Catalog' = './catalog',
  'Cart' = '/v?',
  'About' = '/about',
  'Undefin' = '/404'
}
