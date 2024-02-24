// src\frontend\src\components\pages\Header\index.tsx

import React, { JSX } from 'react';
import headerLogo from '@Img/header-logo.png';
import LiFC from '@Attribute/Li.tsx';
import AncorFC from '@Attribute/Ancor.tsx';
import { Pages } from '@Root';
const topMenuArr = [
  {
    id: 1,
    title: 'Главная',
    path: Pages.Home
  },
  {
    id: 2,
    title: 'Каталог',
    path: Pages.Catalog
  },
  {
    id: 3,
    title: 'О магазине',
    path: Pages.About
  },
  {
    id: 4,
    title: 'Контакты',
    path: Pages.Contacts
  }
];

export function HeaderFC(): JSX.Element {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={headerLogo} alt="Bosa Noga" />
            </a>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                {/* active */}
                {/* The top mennu of `<head>...</head>` */}
                {
                  Array.from(topMenuArr).map((obj) => (
                    <>
                      <LiFC key={obj.id} classes='nav-item'>
                        <AncorFC classes='nav-link' path={obj.path} context={obj.title} />
                      </LiFC>
                    </>
                  ))
                }
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                  { /* <!-- Do programmatic navigation on click to /cart.html --> */}
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                  <input className="form-control" placeholder="Поиск" />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>

  );
}
