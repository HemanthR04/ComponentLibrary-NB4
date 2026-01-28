"use client";

import { useState } from "react";
import CreateSection from "@/Components/Internal/CreateSection";
import HeroSection from "@/Components/Internal/HeroSection";
import PreviewSection from "@/Components/Internal/PreviewSection";
import { ComponentId } from "@/lib/components";
import { AnimationId } from "@/lib/animations";

export default function Home() {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentId | null>(null);
  const [selectedAnimation, setSelectedAnimation] =
    useState<AnimationId | null>(null);

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <HeroSection />
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col lg:flex-row gap-6 h-full min-h-[600px]">
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
    </div>
  );
}
