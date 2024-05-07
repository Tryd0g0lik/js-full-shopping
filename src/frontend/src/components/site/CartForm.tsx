import React, { JSX } from 'react';
import FormFC from './Forms/index.tsx';
import ButtonFC from './Forms/Button.tsx';
import InputsFC from './Forms/Imputs.tsx';
import LabelFC from './Forms/Lebel.tsx';
import HeadFC from './Headers.tsx';

export default function CartFormFC(): JSX.Element {
  return (
    <>
      <HeadFC number={2} classes='text-center' title='Оформить заказ' />
      <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <FormFC classes='card-body'>
          <>
            <div className="form-group">
              <LabelFC htmlfor='phone' context='Телефон' />
              <InputsFC classes='form-control' ind="phone" placeholder="Ваш телефон" />
            </div>
            <div className="form-group">
              <LabelFC htmlfor="address" context='Адрес доставки' />
              <InputsFC classes='form-control' ind="address" placeholder="Адрес доставки" />
            </div>
            <div className="form-group form-check">
              <label htmlFor='agreement' className='form-check-label'>
                <div id="agreement" className='form-check-input'></div> Согласен с правилами доставки
              </label>
            </div>
            <ButtonFC classes='btn btn-outline-secondary' context='Оформить' />

          </>
        </FormFC>
      </div>
    </>
  );
}
