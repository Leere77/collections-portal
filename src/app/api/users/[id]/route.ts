import { NextResponse } from "next/server";

import { users } from "@/lib/mockData/users";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(users.find((user) => user._id === id)), 500)
  ).then((data) => data);

  return NextResponse.json(data);
}
