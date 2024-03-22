import { SFetch } from '@service/server';
import { HandlerPositionVal, Position } from '@type';
import { useEffect, useState } from 'react';

const REACT_APP_URL = process.env.REACT_APP_URL as string;
const REACT_APP_BPORT = process.env.REACT_APP_BPORT as string;
const url = REACT_APP_URL + ':' + REACT_APP_BPORT + '/api';

/**
 * Works to main page, only.
 * @param categories : Position[] | undefined
 * @returns category: Position[]. 
 */
export default function useCategory(categories: HandlerPositionVal = []) {
  const [category, useCategory] = useState<HandlerPositionVal>((categories.length > 0) ? categories : undefined); // THis a dashbord of ctegories

  /* ------------ */
  useEffect(() => {
    const serverCategory = new SFetch(url);
    /* create a request to the server | '/categories' */
    serverCategory.requestOneBefore = { categories: true };
    serverCategory.getRrequestOneParamServer(useCategory as typeof useState);
  }, [useCategory]);

  return category
}
