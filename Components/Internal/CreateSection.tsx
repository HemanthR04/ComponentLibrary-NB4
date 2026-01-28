import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import ComponentSection from "./ComponentSection";
import AnimationSection from "./AnimationSection";
import { ComponentId } from "@/lib/components";
import { AnimationId } from "@/lib/animations";

interface CreateSectionProps {
  selectedComponent: ComponentId | null;
  selectedAnimation: AnimationId | null;
  onSelectComponent: (id: ComponentId) => void;
  onSelectAnimation: (id: AnimationId) => void;
}

export default function CreateSection({
  selectedComponent,
  selectedAnimation,
  onSelectComponent,
  onSelectAnimation,
}: CreateSectionProps) {
  return (
    <Card className="w-[400px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle>Create</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <Tabs defaultValue="components" className="h-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="animations">Animations</TabsTrigger>
          </TabsList>
          <TabsContent value="components" className="mt-4">
            <ComponentSection
              selectedComponent={selectedComponent}
              onSelect={onSelectComponent}
            />
          </TabsContent>
          <TabsContent value="animations" className="mt-4">
            <AnimationSection
              selectedAnimation={selectedAnimation}
              onSelect={onSelectAnimation}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
