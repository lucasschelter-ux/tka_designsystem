import { TopNav } from "@/components/TopNav";
import { Hero } from "@/components/Hero";
import { BenefitStats } from "@/components/BenefitStats";
import { PromoCountdown } from "@/components/PromoCountdown";
import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <BenefitStats />
        <PromoCountdown />
        <Categories />
      </main>
      <Footer />
    </>
  );
}
