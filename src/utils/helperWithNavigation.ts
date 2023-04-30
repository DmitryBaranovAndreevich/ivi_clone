import { TObjWithParamsUrl } from '../hooks/useNavigation';

type TSetUrlParams = (
  nameInitialValue: 'genre' | 'country' | 'year',
  valuesCheckbox: Array<string>,
  choosenValue: TObjWithParamsUrl,
  partUrl: 'genre' | 'country' | 'year'
) => string | null | undefined;

export const setUrlParams: TSetUrlParams = (
  nameInitialValue,
  valuesCheckbox,
  choosenValue,
  partUrl
) => {
  debugger;
  if (nameInitialValue === partUrl) {
    return valuesCheckbox.join('+');
  } else if (choosenValue[partUrl]) {
    return choosenValue[partUrl];
  }
  return null;
};
