export enum ECollectionItemType {
  Books = "books",
  Manga = "mangs",
  Movie = "moovie",
  Series = "series",
}

export interface ICollectionItem {
  _id: string;
  title: string;
  authors: string[];
  imageUrl?: string;
  type: ECollectionItemType;
}

export interface ICollection {
  _id: string;
  owner: string;
  title: string;
  description?: string;
  items: ICollectionItem[];
}
