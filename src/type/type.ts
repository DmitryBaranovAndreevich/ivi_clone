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
