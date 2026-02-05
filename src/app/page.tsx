import { Navigation } from "@/components/shared/navigation";
import { Hero } from "@/components/sections/hero";
import { ExecutiveSummary } from "@/components/sections/executive-summary";
import { KillerContents } from "@/components/sections/killer-contents";
import { Storytelling } from "@/components/sections/storytelling";
import { EconomicImpact } from "@/components/sections/economic-impact";
import { Timeline } from "@/components/sections/timeline";
import { Budget } from "@/components/sections/budget";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ExecutiveSummary />
        <KillerContents />
        <Storytelling />
        <EconomicImpact />
        <Timeline />
        <Budget />
        <Footer />
      </main>
    </>
  );
}
