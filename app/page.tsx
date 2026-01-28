"use client";

import { useState } from "react";
import CreateSection from "@/Components/Internal/CreateSection";
import HeroSection from "@/Components/Internal/HeroSection";
import PreviewSection from "@/Components/Internal/PreviewSection";
import { ComponentId } from "@/lib/components";
import { AnimationId } from "@/lib/animations";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentId | null>(null);
  const [selectedAnimation, setSelectedAnimation] = useState<AnimationId | null>(null);

  return (
    <div className="flex flex-col h-full">
      <HeroSection />
      <div className="flex flex-1 gap-6 p-6">
        <CreateSection
          selectedComponent={selectedComponent}
          selectedAnimation={selectedAnimation}
          onSelectComponent={setSelectedComponent}
          onSelectAnimation={setSelectedAnimation}
        />
        <PreviewSection
          selectedComponent={selectedComponent}
          selectedAnimation={selectedAnimation}
          onReset={() => {
            setSelectedComponent(null);
            setSelectedAnimation(null);
          }}
        />
      </div>
    </div>
  );
}
