import { DispatcherStorage } from '@service/postman';
import { Position, PositionsCard, ORDER } from '@type';

export default function useAddCard(): PositionsCard[] {
  const dispatcher = new DispatcherStorage();

  const result = dispatcher.getOfLocalStorage('order');
  if (result !== null) {
    const newPositions: PositionsCard = {
      type: 'ORDER',
      id: 0,
      order: result.data.order as Position[]
    };
    return [newPositions];
  }
  return [];
}

export type UseAddCard = typeof useAddCard;
