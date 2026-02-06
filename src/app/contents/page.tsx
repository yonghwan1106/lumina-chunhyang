import { Metadata } from "next";
import { ContentsListContent } from "./contents-list";

export const metadata: Metadata = {
  title: "킬러 콘텐츠",
  description: "스마트 합죽선, 개화하는 누각, 오작교 레조넌스, 글로벌 러브 시그널 - 4대 핵심 콘텐츠를 만나보세요.",
};

export default function ContentsPage() {
  return <ContentsListContent />;
}
