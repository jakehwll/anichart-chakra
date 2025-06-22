import { getAnimeSeason } from "@/utils/seasons";
import { redirect } from "next/navigation";

export default function Home() {
  const date = new Date();

  const year = date.getFullYear();
  const season = getAnimeSeason({ month: date.getMonth() });

  return redirect(`/${season}-${year}`);
}
