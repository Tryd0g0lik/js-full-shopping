import { useContext } from 'react';
import { OurContext } from '@site/catalog-searcher/OurProvider';
import { SearchContext } from '@type';
/**
 * Вызывая этот наш hook , получаем 'val = { ...text, fn: searcher } ' из 'SearchProviderFC'
 * */
export function useSearch(): SearchContext {
  return useContext(OurContext) as SearchContext;
}
