"use client";

import { Card, CardContent } from "@/Components/ui/card";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { Badge } from "@/Components/ui/badge";
import { animations, AnimationId } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimationSectionProps {
  selectedAnimation: AnimationId | null;
  onSelect: (id: AnimationId) => void;
}

export default function AnimationSection({
  selectedAnimation,
  onSelect,
}: AnimationSectionProps) {
  return (
    <ScrollArea className="h-[400px]">
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Choose an animation effect
        </p>
        <div className="grid gap-2">
          {animations.map((animation) => (
            <Card
              key={animation.id}
              className={cn(
                "cursor-pointer transition-all",
                selectedAnimation === animation.id
                  ? "ring-2 ring-primary bg-accent"
                  : "hover:bg-accent"
              )}
              onClick={() => onSelect(animation.id)}
            >
              <CardContent className="p-3 flex items-center justify-between">
                <span className="font-medium text-sm">{animation.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {animation.type}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
