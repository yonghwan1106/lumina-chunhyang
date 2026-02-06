import { Metadata } from "next";
import { StoryContent } from "./story-content";

export const metadata: Metadata = {
  title: "스토리텔링",
  description: "춘향과 몽룡의 사랑 이야기를 사계절 테마로 재해석한 몰입형 여정을 경험하세요.",
};

export default function StoryPage() {
  return <StoryContent />;
}
