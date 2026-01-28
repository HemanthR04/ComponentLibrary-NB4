"use client";

import { ScrollArea } from "@/Components/ui/scroll-area";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
  categories,
  CategoryId,
  getCategoryComponentCount,
  components,
} from "@/lib/components";
import { cn } from "@/lib/utils";
import {
  MousePointer,
  ChevronDown,
  Layers,
  CreditCard,
  Maximize2,
  MessageCircle,
  TextCursor,
  LayoutGrid,
} from "lucide-react";

const iconMap = {
  MousePointer,
  ChevronDown,
  Layers,
  CreditCard,
  Maximize2,
  MessageCircle,
  TextCursor,
} as const;

interface CategorySidebarProps {
  selectedCategory: CategoryId | "all";
  onSelectCategory: (category: CategoryId | "all") => void;
  onCategorySelect?: () => void; // For mobile - close drawer after selection
}

export default function CategorySidebar({
  selectedCategory,
  onSelectCategory,
  onCategorySelect,
}: CategorySidebarProps) {
  const handleSelect = (category: CategoryId | "all") => {
    onSelectCategory(category);
    onCategorySelect?.();
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-4 py-4 border-b">
        <h2 className="text-lg font-semibold">Categories</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Filter by component type
        </p>
      </div>
      <ScrollArea className="flex-1 px-2 py-4">
        <div className="space-y-1">
          {/* All option */}
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-3 h-11 px-3",
              selectedCategory === "all" &&
                "bg-accent text-accent-foreground font-medium"
            )}
            onClick={() => handleSelect("all")}
          >
            <LayoutGrid className="h-4 w-4 shrink-0" />
            <span className="flex-1 text-left">All Components</span>
            <Badge
              variant={selectedCategory === "all" ? "default" : "secondary"}
              className="ml-auto text-xs"
            >
              {components.length}
            </Badge>
          </Button>

          {/* Category options */}
          {categories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            const count = getCategoryComponentCount(category.id);

            return (
              <Button
                key={category.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 h-11 px-3",
                  selectedCategory === category.id &&
                    "bg-accent text-accent-foreground font-medium"
                )}
                onClick={() => handleSelect(category.id)}
              >
                {Icon && <Icon className="h-4 w-4 shrink-0" />}
                <span className="flex-1 text-left truncate">{category.name}</span>
                <Badge
                  variant={
                    selectedCategory === category.id ? "default" : "secondary"
                  }
                  className="ml-auto text-xs"
                >
                  {count}
                </Badge>
              </Button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
