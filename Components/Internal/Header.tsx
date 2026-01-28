import { Button } from "@/Components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-7xl mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 3L3 9l9 6 9-6-9-6z" />
            <path d="M3 15l9 6 9-6" />
            <path d="M3 9v6" />
            <path d="M21 9v6" />
          </svg>
          <span className="text-lg font-semibold tracking-tight">
            Component Creator
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="sm" className="text-sm font-medium">
            Components
          </Button>
          <Button variant="ghost" size="sm" className="text-sm font-medium">
            Animations
          </Button>
          <Button variant="ghost" size="sm" className="text-sm font-medium">
            Docs
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-sm font-medium">
            Sign In
          </Button>
          <Button size="sm" className="text-sm font-medium">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
