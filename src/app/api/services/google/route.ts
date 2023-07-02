import { GoogleBooksResponse, ImageLinks } from "@/lib/types/book";
import {
  ECollectionItemType,
  ICollectionItemDraft,
} from "@/lib/types/collection";
import { NextResponse } from "next/server";

const selectBookImageLink = ({
  smallThumbnail,
  thumbnail,
  small,
  medium,
  large,
  extraLarge,
}: ImageLinks) =>
  smallThumbnail || thumbnail || small || medium || large || extraLarge;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchParams.get(
      "q"
    )}&key=${process.env.GOOGLE_BOOKS_API_KEY}`
  );

  const items: GoogleBooksResponse = await res.json();

  const booksList: ICollectionItemDraft[] = items.items.map(
    ({ volumeInfo }) => ({
      title: volumeInfo.title,
      authors: volumeInfo.authors,
      imageUrl: volumeInfo.imageLinks
        ? selectBookImageLink(volumeInfo.imageLinks)
        : "",
      type: ECollectionItemType.Books,
    })
  );

  return NextResponse.json(booksList);
}
