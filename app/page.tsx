import CreateSection from "@/Components/Internal/CreateSection";
import HeroSection from "@/Components/Internal/HeroSection";
import PreviewSection from "@/Components/Internal/PreviewSection";

export default function Home(){
  return (
    <>
      <HeroSection/>
        <div className="Canvas flex w-full h-full">
          <CreateSection/>
          <PreviewSection/>
        </div>
    
    </>
  )
}