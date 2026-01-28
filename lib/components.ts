export const components = [
  {
    id: "simple-button",
    name: "Simple Button",
    category: "Buttons",
    code: `<button className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
  Click Me
</button>`,
  },
  {
    id: "outline-button",
    name: "Outline Button",
    category: "Buttons",
    code: `<button className="px-6 py-2 border border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
  Click Me
</button>`,
  },
  {
    id: "ghost-button",
    name: "Ghost Button",
    category: "Buttons",
    code: `<button className="px-6 py-2 text-primary rounded-md font-medium hover:bg-accent transition-colors">
  Click Me
</button>`,
  },
] as const;

export type Component = (typeof components)[number];
export type ComponentId = Component["id"];
