import { useParams } from 'react-router-dom';
import { TGenreCountriesYears } from '../type/type';

export type TGetArrayFromOneItem = (
  listItem: Array<TGenreCountriesYears> | undefined,
  itemsParams: string | undefined | null
) => Array<string>;

export const getArrayFromOneItem: TGetArrayFromOneItem = (listItem, itemsParams) => {
  // const objWithParamsUrl: TObjWithParamsUrl = {};
  const arr: Array<string> = [];
  if (listItem && itemsParams) {
    const itemsParamsArr = itemsParams.split('+');
    listItem.map((item) => {
      for (let i = 0; i < itemsParamsArr.length; i++) {
        if (item.englishName === itemsParamsArr[i]) {
          arr.push(item.name);
        }
      }
    });
  }
  return arr;
};
