"use client";

import { Card, CardContent } from "@/Components/ui/card";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
  ComponentId,
  CategoryId,
  getComponentsByCategory,
  categories,
} from "@/lib/components";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

interface ComponentSectionProps {
  selectedComponent: ComponentId | null;
  selectedCategory: CategoryId | "all";
  onSelect: (id: ComponentId) => void;
}

function getCategoryLabel(categoryId: string) {
  const category = categories.find((c) => c.id === categoryId);
  return category?.name || categoryId;
}

function ComponentPreview({ id }: { id: ComponentId }) {
  switch (id) {
    // Buttons
    case "simple-button":
      return (
        <Button variant="default" size="default">
          Click Me
        </Button>
      );
    case "outline-button":
      return (
        <Button variant="outline" size="default">
          Click Me
        </Button>
      );
    case "ghost-button":
      return (
        <Button variant="ghost" size="default">
          Click Me
        </Button>
      );
    case "icon-button":
      return (
        <Button variant="default" size="icon" className="rounded-full">
          <ArrowRight className="h-5 w-5" />
        </Button>
      );

    // Accordions
    case "simple-accordion":
      return (
        <div className="w-full border rounded-lg text-left">
          <div className="px-3 py-2 flex items-center justify-between">
            <span className="text-xs font-medium">Accordion Item</span>
            <ChevronDown className="h-3 w-3" />
          </div>
        </div>
      );
    case "bordered-accordion":
      return (
        <div className="w-full border-l-4 border-primary bg-muted/50 rounded-r-lg text-left">
          <div className="px-3 py-2 flex items-center justify-between">
            <span className="text-xs font-medium">Accordion Item</span>
            <ChevronDown className="h-3 w-3" />
          </div>
        </div>
      );

    // Popovers
    case "simple-popover":
      return (
        <div className="relative">
          <Button variant="secondary" size="sm">
            Open Popover
          </Button>
        </div>
      );
    case "dropdown-menu":
      return (
        <Button variant="secondary" size="sm" className="gap-1">
          Menu <ChevronDown className="h-3 w-3" />
        </Button>
      );

    // Cards
    case "simple-card":
      return (
        <div className="w-full p-3 bg-card border rounded-lg shadow-sm">
          <p className="text-xs font-medium">Card Title</p>
          <p className="text-[10px] text-muted-foreground mt-1">Description</p>
        </div>
      );
    case "image-card":
      return (
        <div className="w-full bg-card border rounded-lg overflow-hidden shadow-sm">
          <div className="h-10 bg-gradient-to-br from-primary/20 to-primary/5"></div>
          <div className="p-2">
            <p className="text-xs font-medium">Image Card</p>
          </div>
        </div>
      );

    // Modals
    case "simple-modal":
      return (
        <div className="w-full p-3 bg-background border rounded-lg shadow-lg">
          <p className="text-xs font-medium">Modal Title</p>
          <div className="flex justify-end gap-1 mt-2">
            <Button variant="ghost" size="sm" className="h-6 px-2 text-[10px]">
              Cancel
            </Button>
            <Button size="sm" className="h-6 px-2 text-[10px]">
              Confirm
            </Button>
          </div>
        </div>
      );
    case "alert-modal":
      return (
        <div className="w-full p-3 bg-background border rounded-lg shadow-lg text-center">
          <div className="w-6 h-6 mx-auto mb-1 rounded-full bg-destructive/10 flex items-center justify-center">
            <span className="text-destructive text-[10px]">!</span>
          </div>
          <p className="text-xs font-medium">Alert</p>
        </div>
      );

    // Tooltips
    case "simple-tooltip":
      return (
        <div className="relative">
          <Button variant="secondary" size="sm">
            Hover me
          </Button>
        </div>
      );
    case "icon-tooltip":
      return (
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <HelpCircle className="h-4 w-4" />
        </Button>
      );

    // Inputs
    case "simple-input":
      return (
        <div className="w-full space-y-1">
          <label className="text-[10px] font-medium">Label</label>
          <div className="h-7 px-2 border rounded-md bg-background flex items-center">
            <span className="text-[10px] text-muted-foreground">
              Enter text...
            </span>
          </div>
        </div>
      );
    case "floating-label-input":
      return (
        <div className="w-full relative">
          <div className="h-8 px-2 border rounded-md bg-background"></div>
          <span className="absolute left-2 top-0 -translate-y-1/2 bg-background px-1 text-[10px] text-primary">
            Username
          </span>
        </div>
      );

    default:
      return (
        <div className="text-xs text-muted-foreground">Preview unavailable</div>
      );
  }
}

export default function ComponentSection({
  selectedComponent,
  selectedCategory,
  onSelect,
}: ComponentSectionProps) {
  const filteredComponents = getComponentsByCategory(selectedCategory);

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Choose a component to animate
        {selectedCategory !== "all" && (
          <span className="ml-1">
            ({filteredComponents.length} in{" "}
            {getCategoryLabel(selectedCategory)})
          </span>
        )}
      </p>
      <ScrollArea className="h-[380px] pr-4">
        <div className="space-y-3">
          {filteredComponents.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">
              No components in this category yet.
            </p>
          ) : (
            filteredComponents.map((item) => (
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
                      {getCategoryLabel(item.category)}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-center py-6 bg-muted/50 rounded-lg">
                    <ComponentPreview id={item.id} />
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
