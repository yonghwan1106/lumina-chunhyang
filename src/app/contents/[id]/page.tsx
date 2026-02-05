import { Metadata } from "next";
import { notFound } from "next/navigation";
import { killerContents } from "@/data/killer-contents";
import { ContentDetailPage } from "./content-detail";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return killerContents.map((content) => ({
    id: content.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const content = killerContents.find((c) => c.id === id);

  if (!content) {
    return {
      title: "콘텐츠를 찾을 수 없습니다 | 루미나 춘향",
    };
  }

  return {
    title: `${content.title} | 루미나 춘향`,
    description: content.description,
  };
}

export default async function ContentPage({ params }: Props) {
  const { id } = await params;
  const content = killerContents.find((c) => c.id === id);

  if (!content) {
    notFound();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <ContentDetailPage content={content as any} />;
}
