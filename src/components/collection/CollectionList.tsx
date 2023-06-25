import CollectionItem from "@/components/collection/CollectionItem";
import { ICollection } from "@/lib/types/collection";

export default function CellectionList({ collection }: { collection: ICollection }) {
  const { title, description, items } = collection;

  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{items.map((item) => <CollectionItem key={item._id} item={item} />)}</div>
    </div>)
}