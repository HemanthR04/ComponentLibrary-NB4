"use client";

import { Card, CardContent } from "@/Components/ui/card";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { Badge } from "@/Components/ui/badge";
import { animations, AnimationId, getAnimationsByCategory } from "@/lib/animations";
import { ComponentId, components, CategoryId } from "@/lib/components";
import { cn } from "@/lib/utils";

interface AnimationSectionProps {
  selectedAnimation: AnimationId | null;
  selectedComponent: ComponentId | null;
  onSelect: (id: AnimationId) => void;
}

export default function AnimationSection({
  selectedAnimation,
  selectedComponent,
  onSelect,
}: AnimationSectionProps) {
  // Get the category of the selected component
  const selectedCategory: CategoryId | "all" = selectedComponent
    ? (components.find((c) => c.id === selectedComponent)?.category as CategoryId) || "all"
    : "all";

  // Filter animations based on selected component's category
  const filteredAnimations = getAnimationsByCategory(selectedCategory);

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Choose an animation effect
        {selectedComponent && (
          <span className="ml-1">
            ({filteredAnimations.length} recommended)
          </span>
        )}
      </p>
      <ScrollArea className="h-[380px] pr-4">
        <div className="space-y-2">
          {filteredAnimations.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">
              No animations available for this component type.
            </p>
          ) : (
            filteredAnimations.map((animation) => (
              <Card
                key={animation.id}
                className={cn(
                  "cursor-pointer transition-all duration-200 border-2",
                  selectedAnimation === animation.id
                    ? "border-primary bg-accent/50 shadow-sm"
                    : "border-transparent hover:border-muted-foreground/20 hover:bg-accent/30"
                )}
                onClick={() => onSelect(animation.id)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="font-medium text-sm block">
                      {animation.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {animation.description}
                    </span>
                  </div>
                  <Badge
                    variant={
                      selectedAnimation === animation.id ? "default" : "secondary"
                    }
                    className="text-xs shrink-0"
                  >
                    {animation.type}
                  </Badge>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
