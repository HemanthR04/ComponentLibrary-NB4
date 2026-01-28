import { Button } from "@/Components/ui/button";
import { Separator } from "@/Components/ui/separator";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">Component Creator</span>
        </div>

        <nav className="flex items-center gap-6">
          <Button variant="ghost" size="sm">
            Components
          </Button>
          <Button variant="ghost" size="sm">
            Animations
          </Button>
          <Button variant="ghost" size="sm">
            Docs
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
