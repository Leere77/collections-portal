import CollectionListModal from "@/components/collection/CollectionListModal";
import { ICollection } from "@/lib/types/collection";

async function getCollection({ id }: { id: string }) {
  const data = await fetch(`${process.env.BASE_URL}/api/collection/${id}`);

  return await data.json() as ICollection;
}

export default async function CollectionModal({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getCollection({ id });

  return (<CollectionListModal collection={data} />);
}