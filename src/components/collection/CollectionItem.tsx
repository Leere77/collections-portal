import { ICollectionItem } from "@/lib/types/collection";

export default function CollectionItem({ item }: { item: ICollectionItem }) {
  const { title, imageUrl } = item;

  return <>{title}, {imageUrl}</>
}