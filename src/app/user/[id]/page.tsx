import { IUser } from "@/lib/types/user";
import Link from "next/link";

async function getUser({ id }: { id: string }) {
  const data = await fetch(`${process.env.BASE_URL}/api/users/${id}`, { cache: 'no-cache' });

  return await data.json() as IUser;
}

export default async function User({ params }: { params: { id: string } }) {
  const { id } = params;

  const { collections, name } = await getUser({ id });

  return (<div>
    <p>{name}</p>
    <p>Collections:</p>
    {collections.map(({ _id, title }) => <Link key={_id} href={`/collection/${_id}`}>{title}</Link>)}
  </div>)
}