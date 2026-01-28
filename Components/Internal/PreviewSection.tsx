"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Separator } from "@/Components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import { ComponentId, components } from "@/lib/components";
import { AnimationId, animations } from "@/lib/animations";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  AlertCircle,
} from "lucide-react";

interface PreviewSectionProps {
  selectedComponent: ComponentId | null;
  selectedAnimation: AnimationId | null;
  onReset: () => void;
}

// CSS Keyframes for all animations
const keyframesCSS = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}
@keyframes expand {
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 500px; }
}
@keyframes collapse {
  from { opacity: 1; max-height: 500px; }
  to { opacity: 0; max-height: 0; }
}
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes popIn {
  0% { opacity: 0; transform: scale(0.8); }
  70% { transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes dropdown {
  from { opacity: 0; transform: translateY(-8px) scaleY(0.95); }
  to { opacity: 1; transform: translateY(0) scaleY(1); }
}
@keyframes fadeScale {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes lift {
  from { transform: translateY(0); box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  to { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.15); }
}
@keyframes tilt {
  0% { transform: perspective(1000px) rotateX(0) rotateY(0); }
  100% { transform: perspective(1000px) rotateX(2deg) rotateY(2deg); }
}
@keyframes glow {
  0% { box-shadow: 0 0 0 rgba(59, 130, 246, 0); }
  100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
}
@keyframes flip {
  from { opacity: 0; transform: perspective(1000px) rotateY(-90deg); }
  to { opacity: 1; transform: perspective(1000px) rotateY(0); }
}
@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes zoomOut {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.5); }
}
@keyframes slideInBottom {
  from { opacity: 0; transform: translateY(100%); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes backdropBlur {
  from { backdrop-filter: blur(0); opacity: 0; }
  to { backdrop-filter: blur(8px); opacity: 1; }
}
@keyframes tooltipAppear {
  from { opacity: 0; transform: translateY(4px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes tooltipBounce {
  0% { opacity: 0; transform: translateY(8px); }
  60% { transform: translateY(-2px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes focusGlow {
  from { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
  to { box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3); }
}
@keyframes shakeError {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-4px); }
  40%, 80% { transform: translateX(4px); }
}
@keyframes slideLabel {
  from { transform: translateY(0); font-size: 1rem; }
  to { transform: translateY(-1.5rem); font-size: 0.75rem; }
}
@keyframes borderDraw {
  from { background-size: 0% 2px; }
  to { background-size: 100% 2px; }
}
`;

export default function PreviewSection({
  selectedComponent,
  selectedAnimation,
  onReset,
}: PreviewSectionProps) {
  const [animationKey, setAnimationKey] = useState(0);
  const [exportOpen, setExportOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const component = components.find((c) => c.id === selectedComponent);
  const animation = animations.find((a) => a.id === selectedAnimation);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [selectedComponent, selectedAnimation]);

  const generateCode = () => {
    if (!component || !animation) return "";

    const animationStyle = `/* Add this CSS to your stylesheet */
${animation.css}

/* Or use Tailwind: ${animation.tailwind} */`;

    const componentCode = component.code.replace(
      'className="',
      `className="${animation.tailwind} `
    );

    return `${animationStyle}

/* Component Code */
${componentCode}`;
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getAnimationStyle = (): React.CSSProperties => {
    if (!animation) return {};

    const keyframesMap: Record<string, string> = {
      "fade-in": "fadeIn 0.5s ease-in-out forwards",
      "scale": "scaleIn 0.3s ease-out forwards",
      "slide-up": "slideUp 0.5s ease-out forwards",
      "bounce": "bounce 1s ease-in-out infinite",
      "pulse": "pulse 2s ease-in-out infinite",
      "shake": "shake 0.5s ease-in-out",
      "expand": "expand 0.3s ease-out forwards",
      "collapse": "collapse 0.3s ease-in forwards",
      "slide-down": "slideDown 0.3s ease-out forwards",
      "pop-in": "popIn 0.25s ease-out forwards",
      "dropdown": "dropdown 0.2s ease-out forwards",
      "fade-scale": "fadeScale 0.15s ease-out forwards",
      "lift": "lift 0.2s ease-out forwards",
      "tilt": "tilt 0.3s ease-out forwards",
      "glow": "glow 0.3s ease-out forwards",
      "flip": "flip 0.5s ease-out forwards",
      "zoom-in": "zoomIn 0.3s ease-out forwards",
      "zoom-out": "zoomOut 0.2s ease-in forwards",
      "slide-in-bottom": "slideInBottom 0.3s ease-out forwards",
      "backdrop-blur": "backdropBlur 0.3s ease-out forwards",
      "tooltip-appear": "tooltipAppear 0.15s ease-out forwards",
      "tooltip-bounce": "tooltipBounce 0.3s ease-out forwards",
      "fade-up": "fadeUp 0.2s ease-out forwards",
      "focus-glow": "focusGlow 0.2s ease-out forwards",
      "shake-error": "shakeError 0.4s ease-in-out",
      "slide-label": "slideLabel 0.2s ease-out forwards",
      "border-draw": "borderDraw 0.3s ease-out forwards",
    };

    return { animation: keyframesMap[animation.id] };
  };

  const renderComponentPreview = () => {
    if (!selectedComponent) return null;

    switch (selectedComponent) {
      // Buttons
      case "simple-button":
        return (
          <Button variant="default" size="lg" className="text-base px-8">
            Click Me
          </Button>
        );
      case "outline-button":
        return (
          <Button variant="outline" size="lg" className="text-base px-8">
            Click Me
          </Button>
        );
      case "ghost-button":
        return (
          <Button variant="ghost" size="lg" className="text-base px-8">
            Click Me
          </Button>
        );
      case "icon-button":
        return (
          <Button variant="default" size="icon" className="rounded-full h-12 w-12">
            <ArrowRight className="h-5 w-5" />
          </Button>
        );

      // Accordions
      case "simple-accordion":
        return (
          <div className="w-72 border rounded-lg bg-card">
            <button className="w-full px-4 py-3 text-left font-medium flex items-center justify-between">
              <span>Accordion Item</span>
              <ChevronDown className="h-5 w-5" />
            </button>
            <div className="px-4 pb-3 text-muted-foreground text-sm">
              Accordion content goes here with some example text.
            </div>
          </div>
        );
      case "bordered-accordion":
        return (
          <div className="w-72 border-l-4 border-primary bg-muted/50 rounded-r-lg">
            <button className="w-full px-4 py-3 text-left font-medium flex items-center justify-between">
              <span>Accordion Item</span>
              <ChevronDown className="h-5 w-5" />
            </button>
            <div className="px-4 pb-3 text-muted-foreground text-sm">
              Accordion content goes here with some example text.
            </div>
          </div>
        );

      // Popovers
      case "simple-popover":
        return (
          <div className="relative">
            <Button variant="secondary">Open Popover</Button>
            <div className="absolute top-full mt-2 p-4 bg-popover border rounded-lg shadow-lg min-w-[200px]">
              <p className="text-sm">Popover content</p>
            </div>
          </div>
        );
      case "dropdown-menu":
        return (
          <div className="relative">
            <Button variant="secondary" className="gap-2">
              Menu <ChevronDown className="h-4 w-4" />
            </Button>
            <div className="absolute top-full mt-2 py-1 bg-popover border rounded-lg shadow-lg min-w-[160px]">
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-accent">Option 1</button>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-accent">Option 2</button>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-accent">Option 3</button>
            </div>
          </div>
        );

      // Cards
      case "simple-card":
        return (
          <div className="w-72 p-6 bg-card border rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Card Title</h3>
            <p className="text-muted-foreground text-sm">
              Card description goes here with some content to display.
            </p>
          </div>
        );
      case "image-card":
        return (
          <div className="w-72 bg-card border rounded-xl overflow-hidden shadow-sm">
            <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5"></div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">Image Card</h3>
              <p className="text-muted-foreground text-sm">Card with image area.</p>
            </div>
          </div>
        );

      // Modals
      case "simple-modal":
        return (
          <div className="w-80 bg-background p-6 rounded-xl shadow-xl border">
            <h2 className="text-lg font-semibold mb-2">Modal Title</h2>
            <p className="text-muted-foreground mb-4 text-sm">
              Modal content and description goes here.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="ghost" size="sm">Cancel</Button>
              <Button size="sm">Confirm</Button>
            </div>
          </div>
        );
      case "alert-modal":
        return (
          <div className="w-72 bg-background p-6 rounded-xl shadow-xl border text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <h2 className="text-lg font-semibold mb-2">Alert</h2>
            <p className="text-muted-foreground mb-4 text-sm">
              Are you sure you want to proceed?
            </p>
            <Button variant="destructive" className="w-full">Delete</Button>
          </div>
        );

      // Tooltips
      case "simple-tooltip":
        return (
          <div className="relative">
            <Button variant="secondary">Hover me</Button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-popover border rounded-md shadow-md text-sm whitespace-nowrap">
              Tooltip text
            </div>
          </div>
        );
      case "icon-tooltip":
        return (
          <div className="relative">
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
            </Button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-popover border rounded-md shadow-md text-sm whitespace-nowrap">
              Help information
            </div>
          </div>
        );

      // Inputs
      case "simple-input":
        return (
          <div className="w-64 space-y-2">
            <label className="text-sm font-medium">Label</label>
            <input
              type="text"
              placeholder="Enter text..."
              className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>
        );
      case "floating-label-input":
        return (
          <div className="w-64 relative">
            <input
              type="text"
              placeholder=" "
              className="peer w-full px-4 py-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
            <label className="absolute left-4 top-0 -translate-y-1/2 bg-background px-1 text-xs text-primary transition-all">
              Username
            </label>
          </div>
        );

      default:
        return (
          <div className="text-muted-foreground">
            Preview not available for this component
          </div>
        );
    }
  };

  const hasSelection = selectedComponent && selectedAnimation;

  return (
    <>
      {/* Inject keyframes CSS */}
      <style>{keyframesCSS}</style>

      <Card className="flex-1 flex flex-col shadow-sm">
        <CardHeader className="space-y-1">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-semibold">Preview</CardTitle>
              <CardDescription className="text-sm">
                {hasSelection
                  ? `${component?.name} with ${animation?.name} animation`
                  : "Select a component and animation to see the preview"}
              </CardDescription>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAnimationKey((prev) => prev + 1)}
                disabled={!hasSelection}
                className="text-sm font-medium"
              >
                Replay
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onReset}
                disabled={!selectedComponent && !selectedAnimation}
                className="text-sm font-medium"
              >
                Reset
              </Button>
              <Button
                size="sm"
                onClick={() => setExportOpen(true)}
                disabled={!hasSelection}
                className="text-sm font-medium"
              >
                Export Code
              </Button>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="flex-1 flex items-center justify-center p-8 min-h-[400px]">
          {hasSelection ? (
            <div
              key={animationKey}
              style={getAnimationStyle()}
              className="flex items-center justify-center"
            >
              {renderComponentPreview()}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium text-foreground">
                  No preview yet
                </p>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Select a component and an animation from the left panel to see
                  it in action
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={exportOpen} onOpenChange={setExportOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-xl font-semibold">
              Export Code
            </DialogTitle>
            <DialogDescription className="text-sm">
              Copy the code below to use {component?.name} with {animation?.name}{" "}
              animation in your project
            </DialogDescription>
          </DialogHeader>
          <div className="relative mt-4">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm max-h-[400px] overflow-y-auto font-mono leading-relaxed">
              <code>{generateCode()}</code>
            </pre>
            <Button
              size="sm"
              variant={copied ? "secondary" : "default"}
              className="absolute top-3 right-3 text-sm font-medium"
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
