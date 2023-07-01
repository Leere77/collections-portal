import CollectionForm from "@/components/collection/CollectionForm";
import CollectionList from "@/components/collection/CollectionList";
import RouteModal from "@/components/modals/RouteModal";
import { ICollection } from "@/lib/types/collection";

async function getCollection({ id }: { id: string }) {
  const data = await fetch(`${process.env.BASE_URL}/api/collection/${id}`, { cache: "no-cache" });

  return await data.json() as ICollection;
}

// TODO: repeating code
// TODO: fix routing

export default async function CollectionEditModal({ params }: { params: { id: string } }) {
  const { id } = params;
  const collection = await getCollection({ id });

  return (
    <RouteModal>
      <CollectionForm collection={collection} />
      <CollectionList isEdit collection={collection} />
    </RouteModal>
  );
}