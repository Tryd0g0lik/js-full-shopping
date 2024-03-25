import { Position } from '@type';

/**
 * Entre point get the two varieble
 * @param `serchlyStr`: `string`. It's a word from the search form.
 * @param `positionsList`: Array<Position>
 * @returns  the filtered  Array<Position>.
 * */
const searching = (serchlyStr: string, positionsList: Position[]): Position[] => {
  const dataSplitup = serchlyStr.split(' ');
  let newPositionsList: Position[] = [];

  positionsList.forEach((item) => {
    for (let i = 0; i < dataSplitup.length; i++) {
      if ((dataSplitup[i].length >= 3) && (((item.title as string).toLowerCase()).includes((dataSplitup[i]).toLowerCase()))) {
        newPositionsList.push(item);
      }
    }
  });
  return newPositionsList;
};
export default searching
