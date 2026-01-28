import { Badge } from "@/Components/ui/badge";

export default function HeroSection() {
  return (
    <section className="py-8 px-6">
      <div className="container flex flex-col items-center text-center gap-4">
        <Badge variant="secondary" className="mb-2">
          Beta
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Create Animated Components in No Time
        </h1>
        <p className="max-w-[600px] text-muted-foreground text-lg">
          Select a component, choose an animation, and preview it instantly.
          Export ready-to-use code for your projects.
        </p>
      </div>
    </section>
  );
}
