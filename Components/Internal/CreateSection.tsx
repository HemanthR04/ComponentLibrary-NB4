import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
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
    <Card className="w-full lg:w-[380px] flex flex-col shadow-sm">
      <CardHeader className="space-y-1 pb-4">
        <CardTitle className="text-xl font-semibold">Create</CardTitle>
        <CardDescription className="text-sm">
          Build your animated component
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pt-0">
        <Tabs defaultValue="components" className="h-full">
          <TabsList className="grid w-full grid-cols-2 h-10">
            <TabsTrigger value="components" className="text-sm font-medium">
              Components
            </TabsTrigger>
            <TabsTrigger value="animations" className="text-sm font-medium">
              Animations
            </TabsTrigger>
          </TabsList>
          <TabsContent value="components" className="mt-6">
            <ComponentSection
              selectedComponent={selectedComponent}
              onSelect={onSelectComponent}
            />
          </TabsContent>
          <TabsContent value="animations" className="mt-6">
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
