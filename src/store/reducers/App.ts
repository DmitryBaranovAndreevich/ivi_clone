import { createSlice } from '@reduxjs/toolkit';
import { TGenreCountriesYears, TNavigation } from '../../type/type';

const MOCK_GENRES = [
  {
    id: 1,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 2,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
  {
    id: 3,
    name: 'Биография',
    englishName: 'biography',
  },
  {
    id: 4,
    name: 'Боевики',
    englishName: 'boeviki',
  },
  {
    id: 5,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 6,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
  {
    id: 7,
    name: 'Биография',
    englishName: 'biography',
  },
  {
    id: 8,
    name: 'Боевики',
    englishName: 'boeviki',
  },
  {
    id: 9,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 10,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
  {
    id: 11,
    name: 'Биография',
    englishName: 'biography',
  },
  {
    id: 12,
    name: 'Боевики',
    englishName: 'boeviki',
  },
  {
    id: 13,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 14,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
  {
    id: 15,
    name: 'Биография',
    englishName: 'biography',
  },
  {
    id: 16,
    name: 'Боевики',
    englishName: 'boeviki',
  },
  {
    id: 17,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 18,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
  {
    id: 19,
    name: 'Биография',
    englishName: 'biography',
  },
  {
    id: 20,
    name: 'Боевики',
    englishName: 'boeviki',
  },
  {
    id: 21,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 22,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
];

const MOCK_COUNTRY = [
  {
    id: 1,
    name: 'Russia',
    englishName: 'ru',
  },
  {
    id: 2,
    name: 'США',
    englishName: 'us',
  },
  {
    id: 3,
    name: 'Франция',
    englishName: 'fr',
  },
  {
    id: 4,
    name: 'Италия',
    englishName: 'it',
  },
  {
    id: 5,
    name: 'Советские',
    englishName: 'su',
  },
];

const MOCK_YEARS = [
  {
    id: 1,
    name: '2023',
    englishName: '2023',
  },
  {
    id: 2,
    name: '2022',
    englishName: '2022',
  },
  {
    id: 3,
    name: '2021',
    englishName: '2021',
  },
  {
    id: 4,
    name: '2020',
    englishName: '2020',
  },
  {
    id: 5,
    name: '2019',
    englishName: '2019',
  },
  {
    id: 6,
    name: '2018',
    englishName: '2018',
  },
  {
    id: 7,
    name: '2017',
    englishName: '2017',
  },
  {
    id: 8,
    name: '2016',
    englishName: '2016',
  },
  {
    id: 9,
    name: '2022-2023',
    englishName: '2022-2023',
  },
  {
    id: 10,
    name: '2021-2022',
    englishName: '2021-2022',
  },
  {
    id: 11,
    name: '2020-2021',
    englishName: '2020-2021',
  },
  {
    id: 12,
    name: '2019-2020',
    englishName: '2019-2020',
  },
  {
    id: 13,
    name: '2010-2020',
    englishName: '2010-2020',
  },
  {
    id: 14,
    name: '2010-2015',
    englishName: '2010-2015',
  },
  {
    id: 15,
    name: '2000-2010',
    englishName: '2000-2010',
  },
  {
    id: 16,
    name: '1990-2000',
    englishName: '1990-2000',
  },
  {
    id: 17,
    name: '1980-1990',
    englishName: '1980-1990',
  },
  {
    id: 18,
    name: '1980',
    englishName: '1980',
  },
];

const MOCK_NAVIGATION_DESKTOP = [
  {
    href: '/',
    title: 'Мой Иви',
    isExpand: false,
  },
  {
    href: 'https://www.ivi.tv/new',
    title: 'Что нового',
    isExpand: false,
  },
  {
    href: '/movies',
    title: 'Фильмы',
    isExpand: true,
  },
  {
    href: '/movies',
    title: 'Сериалы',
    isExpand: true,
  },
  {
    href: '/movies',
    title: 'Мультфильмы',
    isExpand: true,
  },
];

const MOCK_NAVIGATION_LAPTOP = [
  {
    href: '#',
    title: 'Мой Иви',
    isExpand: false,
  },
  {
    href: '#',
    title: 'Каталог',
    isExpand: false,
  },
  {
    href: '#',
    title: 'Поиск',
    isExpand: false,
  },
  {
    href: '#',
    title: 'Профиль',
    isExpand: false,
  },
  {
    href: '#',
    title: 'Еще',
    isExpand: false,
  },
];

type TAppInitialState = {
  navigationDesktop: Array<TNavigation>;
  navigationTablet: Array<TNavigation>;
  genres: Array<TGenreCountriesYears>;
  countries: Array<TGenreCountriesYears>;
  years: Array<TGenreCountriesYears>;
};

const appInitialState: TAppInitialState = {
  navigationDesktop: MOCK_NAVIGATION_DESKTOP,
  navigationTablet: MOCK_NAVIGATION_LAPTOP,
  genres: MOCK_GENRES,
  countries: MOCK_COUNTRY,
  years: MOCK_YEARS,
};

export const appReducer = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {},
});

export default appReducer.reducer;
