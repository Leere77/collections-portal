"use client"; // TODO: try to decompose

import CollectionItem from "@/components/collection/CollectionItem";
import NewCollectionItem from "@/components/collection/NewCollectionItem";
import CollectionItemWrapper from "@/components/collection/CollectionItemWrapper";

import { ICollection } from "@/lib/types/collection";
import { AddIcon } from "@chakra-ui/icons";

export default function CellectionList({ collection, isEdit }: { collection: ICollection, isEdit?: boolean }) {
  const { items, _id } = collection;

  return (
    <div className="m-4 grid grid-cols-4 gap-4">
      <NewCollectionItem collectionId={_id} />
      {[...items, ...items, ...items].map((item) => (
        <CollectionItemWrapper>
          <CollectionItem key={item._id} item={item} isEdit={isEdit} />
        </CollectionItemWrapper>
      ))}
    </div>
  );
}