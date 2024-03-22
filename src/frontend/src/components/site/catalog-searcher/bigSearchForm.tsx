// src/frontend/src/components/site/catalog-searcher/bigSearchForm.tsx

import { SearchContext, SearchForm } from '@type';
import React, { ChangeEvent, useState } from 'react';

/* ----------------------- */

/**
 * Here is only a search form
 * @param cb : callback for events by an input. It's 'event: React.ChangeEvent'
 * @param state : THis's 'useState' for a 'placeholder' from the 'input'
 * @returns void
 */
export default function BigSerachFormFC({ ...props }: SearchForm): React.JSX.Element {
  const handlerKeyboardEnter = (e: React.KeyboardEvent) => {
    if (e.key.includes('Enter')) {
      e.preventDefault();
    }
  }

  return (
    <form className='catalog-search-form form-inline'  >
      <label htmlFor="search" >
        <input type="text" className="form-control" id="search"
          onChange={(props.cb !== undefined) ? props.cb : (e: ChangeEvent) => { }} // hadlerChangeInput
          placeholder={
            ((props.search !== undefined) && // valSearch
              ((props.search).length > 0)) ? props.search : 'Поиск'} />
      </label>
    </form>
  )
}
// 

