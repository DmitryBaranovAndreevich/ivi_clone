export interface INomination {
  id: number;
  name: string;
}

interface IAward {
  id: number;
  name: string;
  year: number;
  nominations: Array<INomination>;
}
