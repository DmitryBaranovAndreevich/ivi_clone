export type TNavigation = {
  href: string;
  title: string;
  isExpand: boolean;
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
    title?: string;
    text: string;
  };
};
