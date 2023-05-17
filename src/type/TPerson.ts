import { IFilm } from "./TFilm";

type TPerson = {
  id: number;
  name: string;
  originalName: string;
  photo: string;
  films: IFilm[];
  professions: Array<any>;
};

export default TPerson;