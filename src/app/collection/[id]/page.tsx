import CollectionList from "@/components/collection/CollectionList";
import { ICollection } from "@/lib/types/collection";

async function getCollection({ id }: { id: string }) {
  const data = await fetch(`${process.env.BASE_URL}/api/collection/${id}`);

  return await data.json() as ICollection;
}

export default async function Collection({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getCollection({ id });

  return <CollectionList collection={data} />;
}