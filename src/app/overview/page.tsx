import { Metadata } from "next";
import { OverviewContent } from "./overview-content";

export const metadata: Metadata = {
  title: "전략 개요",
  description: "2026 루미나 춘향의 비전과 미션, SWOT 분석, 해외 벤치마킹 사례를 확인하세요.",
};

export default function OverviewPage() {
  return <OverviewContent />;
}
