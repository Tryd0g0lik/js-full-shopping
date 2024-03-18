import React, { createContext, useState, JSX } from 'react';
import { SearchContext } from '@type';


// export const OurContext = createContext({ searchly: '', fn: (datacerch: any, cb: any): void => { } });
export const OurContext = createContext({ searchly: '', method: (newText: string, cb: () => void) => { } });


export const AuthSearchProvider = ({ children }: any) => {
  const [text, stateText] = useState<string>('');
  const searcher = (newText: string, cb: Function): void => {
    stateText(newText);
    cb(); // для переадресации
  };

  // const val = { text } as SearchContext // text - доступно в любом компоненте

  return (
    <OurContext.Provider value={{ searchly: text as string, method: searcher } as SearchContext}>
      {children}
    </OurContext.Provider>)
}

export type AuthhProvider = typeof AuthSearchProvider;
