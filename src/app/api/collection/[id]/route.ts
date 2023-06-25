import { NextResponse } from "next/server";

import { users } from "@/lib/mockData/users";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const tempUser = users.find(({ collections }) =>
    collections.find((collection) => collection._id === id)
  );

  const data = await new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          tempUser?.collections.find((collection) => collection._id === id)
        ),
      500
    )
  ).then((data) => data);

  return NextResponse.json(data);
}
