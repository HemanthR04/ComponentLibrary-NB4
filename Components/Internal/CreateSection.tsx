import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import ComponentSection from "./ComponentSection";
import AnimationSection from "./AnimationSection";

export default function CreateSection() {
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
            <ComponentSection />
          </TabsContent>
          <TabsContent value="animations" className="mt-4">
            <AnimationSection />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
