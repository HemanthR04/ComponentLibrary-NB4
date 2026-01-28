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
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Choose an animation effect
      </p>
      <ScrollArea className="h-[380px] pr-4">
        <div className="space-y-2">
          {animations.map((animation) => (
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
                    {animation.id === "fade-in" && "Smoothly fade in"}
                    {animation.id === "slide-up" && "Slide from bottom"}
                    {animation.id === "bounce" && "Playful bounce effect"}
                    {animation.id === "pulse" && "Gentle pulsing"}
                    {animation.id === "shake" && "Attention-grabbing shake"}
                    {animation.id === "scale" && "Scale up entrance"}
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
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
