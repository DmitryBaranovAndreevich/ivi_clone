import { TNavigationDesctop, TNavigationLaptop, TPersons } from '../type/type';
import logoHome from './../assests/svg/logoHome.svg';
import logoFolder from './../assests/svg/logoFolder.svg';
import logoSearch from './../assests/svg/logoSearch.svg';
import logoUser from './../assests/svg/logoUser.svg';
import logoDot from './../assests/svg/logoDot.svg';

export const MOCK_GENRES = [
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

export const MOCK_COUNTRY = [
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

export const MOCK_YEARS = [
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

export const MOCK_NAVIGATION_DESKTOP: Array<TNavigationDesctop> = [
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

export const MOCK_NAVIGATION_LAPTOP: Array<TNavigationLaptop> = [
  {
    href: '/',
    title: 'Мой Иви',
    logo: logoHome,
  },
  {
    href: '/movies',
    title: 'Каталог',
    logo: logoFolder,
  },
  {
    href: '#',
    title: 'Поиск',
    logo: logoSearch,
  },
  {
    href: '#',
    title: 'Профиль',
    logo: logoUser,
  },
  {
    href: '#',
    title: 'Еще',
    logo: logoDot,
  },
];

export const MOCK_TYPE_PERSONS: Array<TPersons> = [
  {
    id: 1,
    name: 'Режиссёр',
    englishName: 'directors',
  },
  {
    id: 2,
    name: 'Актёры',
    englishName: 'actors',
  },
  {
    id: 3,
    name: 'Продюсеры',
    englishName: 'producers',
  },
  {
    id: 4,
    name: 'Художники',
    englishName: 'designers',
  },
  {
    id: 5,
    name: 'Сценаристы',
    englishName: 'writers',
  },
];

export const MOCK_INFO_FILMS = [
  {
    title: 'Новинки',
    href: 'https://www.ivi.tv/new/movie-new',
  },
  {
    title: 'Подборки',
    href: 'https://www.ivi.tv/collections',
  },
  {
    title: 'Рейтинг',
    href: '/movies?rating_gte=7',
  },
  {
    title: 'Трейлеры',
    href: 'https://www.ivi.tv/trailers',
  },
  {
    title: 'Что посмотреть',
    href: 'https://www.ivi.tv/goodmovies',
  },
  {
    title: 'Фильмы в HD',
    href: 'https://www.ivi.tv/collections/movies-hd',
  },
  {
    title: 'Новинки подписки',
    href: 'https://www.ivi.tv/collections/very-new-svod?_gl=1%2Azl9h5o%2A_ga%2AMTI1MjQzNDUwNy4xNjgzODI0NzEy%2A_ga_GETQ4387MJ%2AMTY4Mzg0MTkyOS4yLjEuMTY4Mzg0MjQzOC42MC4wLjA.&sort=priority_in_collection',
  },
];
