import { ECollectionType } from "../types/collection";
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
        type: ECollectionType.Books,
        items: [
          { _id: "1", title: "Book1", imageUrl: "example.com/book1.jpg" },
          { _id: "2", title: "Book2", imageUrl: "example.com/book2.jpg" },
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
        type: ECollectionType.Manga,
        items: [{ _id: "3", title: "M1", imageUrl: "example.com/manga1.jpg" }],
      },
    ],
  },
];
