import CollcetionHeader from "@/components/collection/CollectionHeader";
import CollectionList from "@/components/collection/CollectionList";

import { ICollection } from "@/lib/types/collection";

async function getCollection({ id }: { id: string }) {
  const data = await fetch(`${process.env.BASE_URL}/api/collection/${id}`, { cache: "no-cache" });

  return await data.json() as ICollection;
}

export default async function Collection({ params }: { params: { id: string } }) {
  const { id } = params;
  const collection = await getCollection({ id });

  const { title, description } = collection;

  return (
    <>
      <div className="container">
        <CollcetionHeader id={id} title={title} description={description} />
      </div>
      <CollectionList collection={collection} />
    </>
  );
}