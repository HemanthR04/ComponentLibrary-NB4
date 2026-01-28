import { Card, CardContent } from "@/Components/ui/card";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { Badge } from "@/Components/ui/badge";
import SimpleButton from "../UI Components/Buttons/SimpleButton";

const components = [
  { id: "simple-button", name: "Simple Button", category: "Buttons", component: <SimpleButton /> },
];

export default function ComponentSection() {
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
              className="cursor-pointer hover:bg-accent transition-colors"
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-sm">{item.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-center p-4 bg-muted rounded-md">
                  {item.component}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
