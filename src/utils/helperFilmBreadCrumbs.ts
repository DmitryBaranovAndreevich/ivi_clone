import { TGenreCountriesYears } from '../type/type';

export type TName = {
  name: string;
  enName: string;
};

export type TGetArrayFromOneItem = (
  listItem: Array<TGenreCountriesYears> | undefined,
  itemsParams: string | undefined | null
) => Array<TName>;

export const getArrayFromOneItem: TGetArrayFromOneItem = (listItem, itemsParams) => {
  const arr: Array<TName> = [];
  if (listItem && itemsParams) {
    const itemsParamsArr = itemsParams.split('+');
    listItem.map((item) => {
      for (let i = 0; i < itemsParamsArr.length; i++) {
        if (item.englishName === itemsParamsArr[i]) {
          arr.push({
            name: item.name,
            enName: item.englishName,
          });
        }
      }
    });
  }
  return arr;
};
