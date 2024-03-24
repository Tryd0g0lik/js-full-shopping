import React, { JSX, Fragment, useId } from 'react';
import LiFC from '@site/Li.tsx';
import AncorFC from '@site/Ancor.tsx';
import { Pages } from '@type';
import HeadFC from '@site/Headers.tsx';
import DivFC from '@site/Div.tsx';

const footerMenuArr = [
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
const classFooterBank = [
  'footer-pay-systems footer-pay-systems-paypal',
  'footer-pay-systems footer-pay-systems-master-card',
  'footer-pay-systems footer-pay-systems-visa',
  'footer-pay-systems footer-pay-systems-yandex',
  'footer-pay-systems footer-pay-systems-webmoney',
  'footer-pay-systems footer-pay-systems-qiwi'
];

export function FooterFC(): JSX.Element {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <section>
            <HeadFC number={5} title='Информация' />
            <ul className="nav flex-column">
              { /* Here is a menu of footer */}
              {
                Array.from(footerMenuArr).map((obj) => (
                  <LiFC key={useId() + obj.path} classes='nav-item'>
                    <AncorFC path={obj.path} context={obj.title} classes='nav-link' />
                  </LiFC>
                ))
              }
            </ul>
          </section>
        </div>
        <div className="col">
          <section>
            <HeadFC number={5} title='Принимаем к оплате:' />
            {/** Here is a place for Visa cards of bank  */}
            <div className="footer-pay">
              {
                Array.from(classFooterBank).map((str) => (
                  <DivFC key={useId()} classes={str} />
                ))
              }
            </div>
          </section>
          <section>
            <div className="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
              Все права защищены. <br />Доставка по всей России!
            </div>
          </section>
        </div>
        <div className="col text-right">
          <section className="footer-contacts">
            <HeadFC number={5} title='Контакты:' />
            <AncorFC classes='footer-contacts-phone' path='tel:+7-495-790-35-03' context='+7 495 79 03 5 03' />
            <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
            <AncorFC classes='footer-contacts-email' path='mailto:office@bosanoga.ru' context='office@bosanoga.ru' />
            <DivFC classes='footer-social-links'>
              <Fragment>
                <DivFC classes='footer-social-link footer-social-link-twitter' />
                <DivFC classes='footer-social-link footer-social-link-vk' />
              </Fragment>
            </DivFC>
          </section>
        </div>
      </div>
    </footer>
  );
}
