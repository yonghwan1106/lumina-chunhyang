import { Metadata } from "next";
import { ImpactContent } from "./impact-content";

export const metadata: Metadata = {
  title: "경제 효과",
  description: "루미나 춘향이 남원시와 전라북도에 가져올 경제적 가치를 전망합니다.",
};

export default function ImpactPage() {
  return <ImpactContent />;
}
