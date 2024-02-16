import React, { JSX } from 'react';
import HeaderFC from './components/Header/index.tsx';
const dashbordTop = {
  name: 'nav-item',
  dashbordArr: [
    {
      dashbord: {
        path: '/',
        context: 'Главная'
      }
    },
    {
      dashbord: {
        path: '/catalog.html',
        context: 'Каталог'
      }
    },
    {
      dashbord: {
        path: '/about.html',
        context: 'О магазине'
      }
    },
    {
      dashbord: {
        path: '/contacts.html',
        context: 'Контакты'
      }
    }
  ]
};
export function AppFC(): JSX.Element {
  return (
    <>
      <HeaderFC props={dashbordTop} />
    </>);
}
