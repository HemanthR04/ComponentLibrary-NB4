"use client";

import { useState } from "react";
import CreateSection from "@/Components/Internal/CreateSection";
import HeroSection from "@/Components/Internal/HeroSection";
import PreviewSection from "@/Components/Internal/PreviewSection";
import CategorySidebar from "@/Components/Internal/CategorySidebar";
import { ComponentId, CategoryId } from "@/lib/components";
import { AnimationId } from "@/lib/animations";
import { Button } from "@/Components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import { Menu } from "lucide-react";

export default function Home() {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentId | null>(null);
  const [selectedAnimation, setSelectedAnimation] =
    useState<AnimationId | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | "all">(
    "all"
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <HeroSection />
      <div className="flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* Mobile category button */}
        <div className="lg:hidden mb-4">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Menu className="h-4 w-4" />
                Categories
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
              <SheetHeader className="sr-only">
                <SheetTitle>Categories</SheetTitle>
              </SheetHeader>
              <CategorySidebar
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                onCategorySelect={() => setSidebarOpen(false)}
              />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-6 h-full min-h-[600px]">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-[240px] shrink-0 border rounded-lg bg-card">
            <CategorySidebar
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </aside>

          {/* Create section */}
          <CreateSection
            selectedComponent={selectedComponent}
            selectedAnimation={selectedAnimation}
            selectedCategory={selectedCategory}
            onSelectComponent={setSelectedComponent}
            onSelectAnimation={setSelectedAnimation}
          />

          {/* Preview section */}
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
