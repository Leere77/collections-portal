import { ICollection } from "@/lib/types/collection";

export interface IUser {
  _id: string;
  name: string;
  collections: ICollection[];
}
