"use client";

import { Card, CardContent } from "@/Components/ui/card";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { components, ComponentId } from "@/lib/components";
import { cn } from "@/lib/utils";

interface ComponentSectionProps {
  selectedComponent: ComponentId | null;
  onSelect: (id: ComponentId) => void;
}

export default function ComponentSection({
  selectedComponent,
  onSelect,
}: ComponentSectionProps) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Choose a component to animate
      </p>
      <ScrollArea className="h-[380px] pr-4">
        <div className="space-y-3">
          {components.map((item) => (
            <Card
              key={item.id}
              className={cn(
                "cursor-pointer transition-all duration-200 border-2",
                selectedComponent === item.id
                  ? "border-primary bg-accent/50 shadow-sm"
                  : "border-transparent hover:border-muted-foreground/20 hover:bg-accent/30"
              )}
              onClick={() => onSelect(item.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-sm">{item.name}</span>
                  <Badge
                    variant={
                      selectedComponent === item.id ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {item.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-center py-6 bg-muted/50 rounded-lg">
                  {item.id === "simple-button" && (
                    <Button variant="default" size="default">
                      Click Me
                    </Button>
                  )}
                  {item.id === "outline-button" && (
                    <Button variant="outline" size="default">
                      Click Me
                    </Button>
                  )}
                  {item.id === "ghost-button" && (
                    <Button variant="ghost" size="default">
                      Click Me
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
