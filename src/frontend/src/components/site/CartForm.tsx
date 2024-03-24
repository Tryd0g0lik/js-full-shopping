import React, { JSX } from 'react';
import FormFC from './Forms';
import ButtonFC from './Forms/Button';
import InputsFC from './Forms/Imputs';
import LabelFC from './Forms/Lebel';
import HeadFC from './Headers';
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
              <InputsFC classes='form-check-input' types='checkbox' ind="agreement" />
              <LabelFC classes='form-check-label' htmlfor="agreement" context='Согласен с правилами доставки' />
            </div>
            <ButtonFC classes='btn btn-outline-secondary' context='Оформить' />

          </>
        </FormFC>
      </div>
    </>
  )
}

