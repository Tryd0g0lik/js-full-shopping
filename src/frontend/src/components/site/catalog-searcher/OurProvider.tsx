import React, { createContext, useState, JSX } from 'react';

// формируем данные для работы в поиске на страниАХ
export const OurContext = createContext({ searchly: '', method: (newText: string, cb: () => void) => { } });

export const AuthSearchProvider = ({ children }: any) => {
  const [text, stateText] = useState<string>('');
  const searcher = (newText: string, cb: () => void): void => {
    stateText(newText);
    cb();// для переадресации, в дальнейшем 'navigate'
  };

  return ( // Провайдер - обхватим ве страницы
    <OurContext.Provider value={{ searchly: text, method: searcher }}>
      {children}
    </OurContext.Provider>);
};

export type AuthhProvider = typeof AuthSearchProvider;
