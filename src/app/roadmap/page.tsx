import { Metadata } from "next";
import { RoadmapContent } from "./roadmap-content";

export const metadata: Metadata = {
  title: "마케팅 로드맵 | 루미나 춘향",
  description: "D-180부터 D+30까지의 체계적인 마케팅 전략과 실행 계획을 확인하세요.",
};

export default function RoadmapPage() {
  return <RoadmapContent />;
}
