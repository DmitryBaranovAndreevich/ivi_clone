export type TNavigationDesctopTitle =
  | 'Мой Иви'
  | 'Что нового'
  | 'Фильмы'
  | 'Сериалы'
  | 'Мультфильмы';
export type TNavigationDesctopEnTitle = 'My ivi' | "What's new" | 'Films' | 'Serials' | 'Cartoons';

export type TNavigationDesctop = {
  href: string;
  title: TNavigationDesctopTitle;
  enTitle: TNavigationDesctopEnTitle;
  isExpand: boolean;
};

export type TNavigationLaptopTitle = 'Мой Иви' | 'Каталог' | 'Поиск' | 'Профиль' | 'Еще';
export type TNavigationLaptopEnTitle = 'My ivi' | 'Catalog' | 'Search' | 'Profile' | 'Else';

export type TNavigationLaptop = {
  href: string;
  title: TNavigationLaptopTitle;
  enTitle: TNavigationLaptopEnTitle;
  logo: string;
};

export type TGenreCountriesYears = {
  id: number;
  name: string;
  englishName: string;
};

export type TParamListMovie = {
  title: string;
  link?: string;
  type?: 'likeButton';
  icon?: string;
};

export type TPersonName = 'Режиссёр' | 'Актёры' | 'Продюсеры' | 'Художники' | 'Сценаристы';

export type TPersonEnglishName = 'directors' | 'actors' | 'producers' | 'designers' | 'writers';

export type TPersons = {
  id: number;
  name: TPersonName;
  englishName: TPersonEnglishName;
};

export type TReviewUser = {
  [index: number]: {
    title: string;
    text: string;
  };
};

export type TInfoFilm = {
  title: string;
  enTitle: string;
  href: string;
};
