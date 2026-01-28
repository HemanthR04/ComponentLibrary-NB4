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

interface PreviewSectionProps {
  selectedComponent: ComponentId | null;
  selectedAnimation: AnimationId | null;
  onReset: () => void;
}

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

  // Replay animation when selection changes
  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [selectedComponent, selectedAnimation]);

  const generateCode = () => {
    if (!component || !animation) return "";

    const animationStyle = `
/* Add this CSS to your stylesheet */
${animation.css}

/* Or use Tailwind: ${animation.tailwind} */
`.trim();

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

  const getAnimationStyle = () => {
    if (!animation) return {};

    const keyframesMap: Record<string, string> = {
      "fade-in": "fadeIn 0.5s ease-in-out forwards",
      "slide-up": "slideUp 0.5s ease-out forwards",
      bounce: "bounce 1s ease-in-out infinite",
      pulse: "pulse 2s ease-in-out infinite",
      shake: "shake 0.5s ease-in-out",
      scale: "scaleIn 0.3s ease-out forwards",
    };

    return { animation: keyframesMap[animation.id] };
  };

  const hasSelection = selectedComponent && selectedAnimation;

  return (
    <>
      <Card className="flex-1 flex flex-col">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                {hasSelection
                  ? `${component?.name} with ${animation?.name}`
                  : "Select a component and animation to preview"}
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onReset}
                disabled={!selectedComponent && !selectedAnimation}
              >
                Reset
              </Button>
              <Button
                size="sm"
                onClick={() => setExportOpen(true)}
                disabled={!hasSelection}
              >
                Export Code
              </Button>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="flex-1 flex items-center justify-center p-8">
          {hasSelection ? (
            <div key={animationKey} style={getAnimationStyle()}>
              {selectedComponent === "simple-button" && (
                <Button variant="default" size="lg">
                  Click Me
                </Button>
              )}
              {selectedComponent === "outline-button" && (
                <Button variant="outline" size="lg">
                  Click Me
                </Button>
              )}
              {selectedComponent === "ghost-button" && (
                <Button variant="ghost" size="lg">
                  Click Me
                </Button>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 text-muted-foreground">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <p className="text-sm">
                Select a component and animation to preview
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={exportOpen} onOpenChange={setExportOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Export Code</DialogTitle>
            <DialogDescription>
              Copy the code below to use in your project
            </DialogDescription>
          </DialogHeader>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm max-h-[400px] overflow-y-auto">
              <code>{generateCode()}</code>
            </pre>
            <Button
              size="sm"
              className="absolute top-2 right-2"
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
