import { ANIME_SEASONS } from "@/utils/seasons";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [season, year] = (await params).slug.split("-");

  if (
    // Ensure that the season is a valid season
    !Object.values(ANIME_SEASONS).includes(season as ANIME_SEASONS) ||
    // Ensure that the year is a set of 4 numbers.
    !year.match(/^\d+$/) ||
    // Ensure that the year is above 2000.
    parseInt(year) < 2000
  ) {
    return notFound();
  }

  return <></>;
}
