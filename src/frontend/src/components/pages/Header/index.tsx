// src\frontend\src\components\pages\Header\index.tsx

import React, { JSX, useEffect, useState } from 'react';
import headerLogo from '@img/header-logo.png';
import LiFC from '@site/Li.tsx';
import AncorFC from '@site/Ancor.tsx';
import { Pages, Position } from '@type';
import { DispatcherStorage } from '@service/postman';
import { QuantilityOrdersFC } from '@site/Orders';
import { SearcherFC } from '@site/catalog-searcher/Searcher';
import SmallSerachFormFC from '@site/catalog-searcher/smallSearchForm';
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
  const dispatch = new DispatcherStorage();
  const check = dispatch.chackeKeyToLockalStorage('order');
  let count = 0;
  if (check) {
    /* counter for orders. this is value for publication in the page header 
     * The state orders on a page header will be change. We has  a three varios: 
     * - page loading;
     *  or
     * - the mouse click event was recived. It's if a click by the button 'Удалить' (from is a the page cart). src\frontend\src\components\pages\Cart\Main\index.tsx
    */
    const ordersData = (dispatch.getOfLocalStorage('order'));
    const ordersArr = (ordersData !== null)
      ? ordersData.data.order : [];
    count += ordersArr.length;
  }
  const [counter, stateCounter] = useState(count);
  useEffect(() => {
    window.addEventListener('click', handlerCaunter);
    return () => {
      window.removeEventListener('click', handlerCaunter);
    }
  }, [counter])

  const handlerCaunter = (e: MouseEvent) => {
    const indexLine = (e.target as HTMLElement);
    if ((e.type === 'click') && (indexLine.tagName.includes('BUTTON')) && (indexLine.innerText.includes('Удалить'))) {
      const dataObj = dispatch.getOfLocalStorage('order');
      const datas = (dataObj as { data: { order: Array<Position[]> } }).data.order as Position[];
      stateCounter(datas.length);

    } else {
      stateCounter(count);
    }

  }
  const handlerrEntre = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.includes('Enter')) {
      e.preventDefault();
    }
  }
  const counterValueCart = QuantilityOrdersFC(counter);
  // stateCounter(count);
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

                    <LiFC key={obj.id} classes='nav-item'>
                      <AncorFC classes='nav-link' path={obj.path} context={obj.title} />
                    </LiFC>

                  ))
                }
              </ul>
              <div>
                <div className="header-controls-pics" onKeyDown={handlerrEntre}>
                  <SmallSerachFormFC />
                  {/* <div data-id="search-expander" className="header-controls-pic header-controls-search header-controls-search-form">
                    <input name="search" className="form-control" type='text' />
                  </div> */}
                  { /* <!-- Do programmatic navigation on click to /cart.html --> */}
                  <div className="header-controls-pic header-controls-cart">
                    {counterValueCart}
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
