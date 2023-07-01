import { ECollectionItemType } from "../types/collection";
import { IUser } from "../types/user";

export const users: IUser[] = [
  {
    _id: "1",
    name: "user1",
    collections: [
      {
        _id: "1",
        title: "example",
        description: "description",
        owner: "1",
        items: [
          {
            _id: "1",
            title: "Der kleine Hobbit",
            authors: ["J. R. R. Tolkien"],
            imageUrl:
              "http://books.google.com/books/content?id=yRP0ugAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            type: ECollectionItemType.Books,
          },
          {
            _id: "2",
            title: "The Lord of the Rings",
            authors: ["John Ronald Reuel Tolkien"],
            imageUrl:
              "http://books.google.com/books/content?id=V3lsKdY7X8MC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            type: ECollectionItemType.Books,
          },
        ],
      },
    ],
  },
  {
    _id: "2",
    name: "user2",
    collections: [
      {
        _id: "2",
        title: "example2",
        description: "description2",
        owner: "2",
        items: [
          {
            _id: "3",
            title: "M1",
            authors: ["Someone"],
            imageUrl: "example.com/manga1.jpg",
            type: ECollectionItemType.Manga,
          },
        ],
      },
    ],
  },
];
