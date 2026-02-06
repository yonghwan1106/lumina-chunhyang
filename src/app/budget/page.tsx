import { Metadata } from "next";
import { BudgetContent } from "./budget-content";

export const metadata: Metadata = {
  title: "예산 계획",
  description: "효율적인 예산 배분으로 최대의 효과를 창출하는 2026 루미나 춘향 예산 계획.",
};

export default function BudgetPage() {
  return <BudgetContent />;
}
