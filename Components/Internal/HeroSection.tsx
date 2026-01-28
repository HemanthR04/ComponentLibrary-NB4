import { Badge } from "@/Components/ui/badge";

export default function HeroSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-4">
        <Badge
          variant="secondary"
          className="px-3 py-1 text-xs font-medium tracking-wide uppercase"
        >
          Beta
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
          Create Animated Components
          <span className="block text-muted-foreground">in No Time</span>
        </h1>
        <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Select a component, choose an animation, and preview it instantly.
          Export ready-to-use code for your projects.
        </p>
      </div>
    </section>
  );
}
