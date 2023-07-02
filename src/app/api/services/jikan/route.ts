import {
  ECollectionItemType,
  ICollectionItemDraft,
} from "@/lib/types/collection";
import { NextResponse } from "next/server";

import { JikanClient } from "@tutkli/jikan-ts";

const jikanClient = new JikanClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const { data } = await jikanClient.anime.getAnimeSearch({
    q: searchParams.get("q") || "",
  });

  const animeList: ICollectionItemDraft[] = data.map(({ title, images }) => ({
    title,
    imageUrl: images.jpg.small_image_url,
    type: ECollectionItemType.Anime,
    authors: [],
  }));

  return NextResponse.json(animeList);
}
