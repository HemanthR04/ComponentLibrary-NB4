import CreateSection from "@/Components/Internal/CreateSection";
import HeroSection from "@/Components/Internal/HeroSection";
import PreviewSection from "@/Components/Internal/PreviewSection";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <HeroSection />
      <div className="flex flex-1 gap-6 p-6">
        <CreateSection />
        <PreviewSection />
      </div>
    </div>
  );
}
