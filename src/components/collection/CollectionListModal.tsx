import CollectionList from "@/components/collection/CollectionList";
import CollcetionHeader from "@/components/collection/CollectionHeader";
import RouteModal from "@/components/modals/RouteModal";

import { ICollection } from "@/lib/types/collection";

export default function CollectionListModal({ collection, id }: { collection: ICollection, id: string }) {
  const { title, description } = collection;

  return (
    <RouteModal>
      <CollcetionHeader id={id} title={title} description={description} />
      <CollectionList collection={collection} />
    </RouteModal>
  );
}