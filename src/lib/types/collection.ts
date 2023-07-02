export enum ECollectionItemType {
  Books = "Books",
  Manga = "Manga",
  Movie = "Movie",
  Series = "Series",
  Anime = "Anime",
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

export interface ICollectionItemDraft extends Omit<ICollectionItem, "_id"> {}
