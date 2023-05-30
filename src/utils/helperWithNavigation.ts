import { TObjWithParamsUrl } from '../hooks/useNavigation';

type TSetUrlParamsCheckbox = (
  nameInitialValue: 'genre' | 'country' | 'year',
  valuesCheckbox: Array<string>,
  choosenValue: TObjWithParamsUrl,
  partUrl: 'genre' | 'country' | 'year'
) => string | null | undefined;

export const setUrlParamsCheckbox: TSetUrlParamsCheckbox = (
  nameInitialValue,
  valuesCheckbox,
  choosenValue,
  partUrl
) => {
  if (nameInitialValue === partUrl) {
    return valuesCheckbox.join('+');
  } else if (choosenValue[partUrl]) {
    return choosenValue[partUrl];
  }
  return null;
};

type TSetUrlParamsRadio = (
  nameInitialValue: 'genre' | 'country' | 'year',
  valuesRadio: string | null | undefined,
  choosenValue: TObjWithParamsUrl,
  partUrl: 'genre' | 'country' | 'year'
) => string | null | undefined;

export const setUrlParamsRadio: TSetUrlParamsRadio = (
  nameInitialValue,
  valuesRadio,
  choosenValue,
  partUrl
) => {
  if (nameInitialValue === partUrl) {
    return valuesRadio;
  } else if (choosenValue[partUrl]) {
    return choosenValue[partUrl];
  }
  return null;
};
