export enum ECollectionType {
  Books,
  Manga,
  Movie,
  Series,
}

export interface ICollectionItem {
  _id: string;
  title: string;
  imageUrl?: string;
}

export interface ICollection {
  _id: string;
  owner: string;
  title: string;
  description?: string;
  type: ECollectionType;
  items: ICollectionItem[];
}
