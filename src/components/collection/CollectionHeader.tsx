import Link from "next/link";

interface ICollcetionHeaderProps {
  id: string;
  title: string;
  description?: string;
}

export default function CollcetionHeader({ title, description, id }: ICollcetionHeaderProps) {

  return (
    <>
      <p><span className="font-bold">Title: </span>{title}</p>
      <p><span className="font-bold">Description: </span>{description || '–'}</p>
      <Link href={`/collection/${id}/edit`}>Edit</Link>
    </>
  );
}