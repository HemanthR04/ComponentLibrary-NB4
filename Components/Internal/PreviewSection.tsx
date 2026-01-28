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
              {selectedComponent === "simple-button" && (
                <Button variant="default" size="lg" className="text-base px-8">
                  Click Me
                </Button>
              )}
              {selectedComponent === "outline-button" && (
                <Button variant="outline" size="lg" className="text-base px-8">
                  Click Me
                </Button>
              )}
              {selectedComponent === "ghost-button" && (
                <Button variant="ghost" size="lg" className="text-base px-8">
                  Click Me
                </Button>
              )}
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
