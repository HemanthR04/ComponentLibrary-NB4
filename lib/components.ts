export const categories = [
  { id: "buttons", name: "Animated Buttons", icon: "MousePointer" },
  { id: "accordions", name: "Animated Accordion", icon: "ChevronDown" },
  { id: "popovers", name: "Animated Popovers", icon: "Layers" },
  { id: "cards", name: "Animated Cards", icon: "CreditCard" },
  { id: "modals", name: "Animated Modals", icon: "Maximize2" },
  { id: "tooltips", name: "Animated Tooltips", icon: "MessageCircle" },
  { id: "inputs", name: "Animated Inputs", icon: "TextCursor" },
] as const;

export type Category = (typeof categories)[number];
export type CategoryId = Category["id"];

export const components = [
  // Buttons
  {
    id: "simple-button",
    name: "Simple Button",
    category: "buttons",
    code: `<button className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
  Click Me
</button>`,
  },
  {
    id: "outline-button",
    name: "Outline Button",
    category: "buttons",
    code: `<button className="px-6 py-2 border border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
  Click Me
</button>`,
  },
  {
    id: "ghost-button",
    name: "Ghost Button",
    category: "buttons",
    code: `<button className="px-6 py-2 text-primary rounded-md font-medium hover:bg-accent transition-colors">
  Click Me
</button>`,
  },
  {
    id: "icon-button",
    name: "Icon Button",
    category: "buttons",
    code: `<button className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
</button>`,
  },
  // Accordions
  {
    id: "simple-accordion",
    name: "Simple Accordion",
    category: "accordions",
    code: `<div className="border rounded-lg">
  <button className="w-full px-4 py-3 text-left font-medium flex items-center justify-between">
    <span>Accordion Item</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
  </button>
  <div className="px-4 pb-3 text-muted-foreground">Accordion content goes here.</div>
</div>`,
  },
  {
    id: "bordered-accordion",
    name: "Bordered Accordion",
    category: "accordions",
    code: `<div className="border-l-4 border-primary bg-muted/50 rounded-r-lg">
  <button className="w-full px-4 py-3 text-left font-medium flex items-center justify-between">
    <span>Accordion Item</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
  </button>
  <div className="px-4 pb-3 text-muted-foreground">Accordion content goes here.</div>
</div>`,
  },
  // Popovers
  {
    id: "simple-popover",
    name: "Simple Popover",
    category: "popovers",
    code: `<div className="relative inline-block">
  <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md">Open Popover</button>
  <div className="absolute top-full mt-2 p-4 bg-popover border rounded-lg shadow-lg min-w-[200px]">
    <p className="text-sm">Popover content</p>
  </div>
</div>`,
  },
  {
    id: "dropdown-menu",
    name: "Dropdown Menu",
    category: "popovers",
    code: `<div className="relative inline-block">
  <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md flex items-center gap-2">
    Menu <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
  </button>
  <div className="absolute top-full mt-2 py-1 bg-popover border rounded-lg shadow-lg min-w-[160px]">
    <button className="w-full px-4 py-2 text-left text-sm hover:bg-accent">Option 1</button>
    <button className="w-full px-4 py-2 text-left text-sm hover:bg-accent">Option 2</button>
    <button className="w-full px-4 py-2 text-left text-sm hover:bg-accent">Option 3</button>
  </div>
</div>`,
  },
  // Cards
  {
    id: "simple-card",
    name: "Simple Card",
    category: "cards",
    code: `<div className="p-6 bg-card border rounded-xl shadow-sm hover:shadow-md transition-shadow">
  <h3 className="font-semibold mb-2">Card Title</h3>
  <p className="text-muted-foreground text-sm">Card description goes here with some content.</p>
</div>`,
  },
  {
    id: "image-card",
    name: "Image Card",
    category: "cards",
    code: `<div className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
  <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5"></div>
  <div className="p-4">
    <h3 className="font-semibold mb-1">Image Card</h3>
    <p className="text-muted-foreground text-sm">Card with image area.</p>
  </div>
</div>`,
  },
  // Modals
  {
    id: "simple-modal",
    name: "Simple Modal",
    category: "modals",
    code: `<div className="fixed inset-0 flex items-center justify-center bg-black/50">
  <div className="bg-background p-6 rounded-xl shadow-xl max-w-md w-full mx-4">
    <h2 className="text-lg font-semibold mb-2">Modal Title</h2>
    <p className="text-muted-foreground mb-4">Modal content and description.</p>
    <div className="flex justify-end gap-2">
      <button className="px-4 py-2 text-sm rounded-md hover:bg-accent">Cancel</button>
      <button className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md">Confirm</button>
    </div>
  </div>
</div>`,
  },
  {
    id: "alert-modal",
    name: "Alert Modal",
    category: "modals",
    code: `<div className="fixed inset-0 flex items-center justify-center bg-black/50">
  <div className="bg-background p-6 rounded-xl shadow-xl max-w-sm w-full mx-4 text-center">
    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-destructive"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
    </div>
    <h2 className="text-lg font-semibold mb-2">Alert</h2>
    <p className="text-muted-foreground mb-4">Are you sure you want to proceed?</p>
    <button className="w-full px-4 py-2 bg-destructive text-destructive-foreground rounded-md">Delete</button>
  </div>
</div>`,
  },
  // Tooltips
  {
    id: "simple-tooltip",
    name: "Simple Tooltip",
    category: "tooltips",
    code: `<div className="relative inline-block">
  <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md">Hover me</button>
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-popover border rounded-md shadow-md text-sm whitespace-nowrap">
    Tooltip text
    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-popover"></div>
  </div>
</div>`,
  },
  {
    id: "icon-tooltip",
    name: "Icon Tooltip",
    category: "tooltips",
    code: `<div className="relative inline-block">
  <button className="p-2 rounded-full hover:bg-accent">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
  </button>
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-popover border rounded-md shadow-md text-sm whitespace-nowrap">
    Help information
  </div>
</div>`,
  },
  // Inputs
  {
    id: "simple-input",
    name: "Simple Input",
    category: "inputs",
    code: `<div className="space-y-2">
  <label className="text-sm font-medium">Label</label>
  <input type="text" placeholder="Enter text..." className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
</div>`,
  },
  {
    id: "floating-label-input",
    name: "Floating Label Input",
    category: "inputs",
    code: `<div className="relative">
  <input type="text" placeholder=" " className="peer w-full px-4 py-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
  <label className="absolute left-4 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-1 peer-focus:-translate-y-1/2">
    Username
  </label>
</div>`,
  },
] as const;

export type Component = (typeof components)[number];
export type ComponentId = Component["id"];

export function getComponentsByCategory(categoryId: CategoryId | "all") {
  if (categoryId === "all") {
    return components;
  }
  return components.filter((c) => c.category === categoryId);
}

export function getCategoryComponentCount(categoryId: CategoryId) {
  return components.filter((c) => c.category === categoryId).length;
}
