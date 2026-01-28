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
    <ScrollArea className="h-[400px]">
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Select a component to customize
        </p>
        <div className="grid gap-3">
          {components.map((item) => (
            <Card
              key={item.id}
              className={cn(
                "cursor-pointer transition-all",
                selectedComponent === item.id
                  ? "ring-2 ring-primary bg-accent"
                  : "hover:bg-accent"
              )}
              onClick={() => onSelect(item.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-sm">{item.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-center p-4 bg-muted rounded-md">
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
      </div>
    </ScrollArea>
  );
}
