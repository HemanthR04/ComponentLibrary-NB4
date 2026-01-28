import { Card, CardContent } from "@/Components/ui/card";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { Badge } from "@/Components/ui/badge";

const animations = [
  { id: "fade-in", name: "Fade In", type: "Entrance" },
  { id: "slide-up", name: "Slide Up", type: "Entrance" },
  { id: "bounce", name: "Bounce", type: "Attention" },
  { id: "pulse", name: "Pulse", type: "Attention" },
  { id: "shake", name: "Shake", type: "Attention" },
  { id: "scale", name: "Scale", type: "Entrance" },
];

export default function AnimationSection() {
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
              className="cursor-pointer hover:bg-accent transition-colors"
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
