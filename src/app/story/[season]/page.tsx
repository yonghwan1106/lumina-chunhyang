import { Metadata } from "next";
import { notFound } from "next/navigation";
import { storySeasons } from "@/data/story-seasons";
import { SeasonDetailPage } from "./season-detail";

interface Props {
  params: Promise<{ season: string }>;
}

export async function generateStaticParams() {
  return Object.keys(storySeasons).map((season) => ({
    season,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { season } = await params;
  const seasonData = storySeasons[season as keyof typeof storySeasons];

  if (!seasonData) {
    return {
      title: "계절을 찾을 수 없습니다 | 루미나 춘향",
    };
  }

  return {
    title: `${seasonData.title} | 루미나 춘향`,
    description: seasonData.description,
  };
}

export default async function SeasonPage({ params }: Props) {
  const { season } = await params;
  const seasonData = storySeasons[season as keyof typeof storySeasons];

  if (!seasonData) {
    notFound();
  }

  return <SeasonDetailPage season={seasonData} />;
}
