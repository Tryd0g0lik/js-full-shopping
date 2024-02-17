import React, { JSX } from 'react';
import PagesFC from './components/pages/Pages.tsx';
// const dashbordTop = {
//   name: 'nav-item',
//   dashbordArr: [
//     {
//       dashbord: {
//         path: '/',
//         context: 'Главная'
//       }
//     },
//     {
//       dashbord: {
//         path: '/catalog.html',
//         context: 'Каталог'
//       }
//     },
//     {
//       dashbord: {
//         path: '/about.html',
//         context: 'О магазине'
//       }
//     },
//     {
//       dashbord: {
//         path: '/contacts.html',
//         context: 'Контакты'
//       }
//     }
//   ]
// };
export function AppFC(): JSX.Element {
  return (
    <>
      <PagesFC />
    </>
  );
}
