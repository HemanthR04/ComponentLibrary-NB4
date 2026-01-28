import { CategoryId } from "./components";

export const animations = [
  // Universal animations (work for all components)
  {
    id: "fade-in",
    name: "Fade In",
    type: "Entrance",
    description: "Smoothly fade in",
    categories: ["buttons", "accordions", "popovers", "cards", "modals", "tooltips", "inputs"] as CategoryId[],
    css: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
    className: "animate-fade-in",
    tailwind: "animate-[fadeIn_0.5s_ease-in-out]",
  },
  {
    id: "scale",
    name: "Scale",
    type: "Entrance",
    description: "Scale up entrance",
    categories: ["buttons", "accordions", "popovers", "cards", "modals", "tooltips", "inputs"] as CategoryId[],
    css: `@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}`,
    className: "animate-scale",
    tailwind: "animate-[scaleIn_0.3s_ease-out]",
  },

  // Button animations
  {
    id: "slide-up",
    name: "Slide Up",
    type: "Entrance",
    description: "Slide from bottom",
    categories: ["buttons", "cards", "modals"] as CategoryId[],
    css: `@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`,
    className: "animate-slide-up",
    tailwind: "animate-[slideUp_0.5s_ease-out]",
  },
  {
    id: "bounce",
    name: "Bounce",
    type: "Attention",
    description: "Playful bounce effect",
    categories: ["buttons", "tooltips"] as CategoryId[],
    css: `@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}`,
    className: "animate-bounce-custom",
    tailwind: "animate-[bounce_1s_ease-in-out_infinite]",
  },
  {
    id: "pulse",
    name: "Pulse",
    type: "Attention",
    description: "Gentle pulsing",
    categories: ["buttons", "cards"] as CategoryId[],
    css: `@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}`,
    className: "animate-pulse-custom",
    tailwind: "animate-[pulse_2s_ease-in-out_infinite]",
  },
  {
    id: "shake",
    name: "Shake",
    type: "Attention",
    description: "Attention-grabbing shake",
    categories: ["buttons", "inputs"] as CategoryId[],
    css: `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}`,
    className: "animate-shake",
    tailwind: "animate-[shake_0.5s_ease-in-out]",
  },

  // Accordion animations
  {
    id: "expand",
    name: "Expand",
    type: "Entrance",
    description: "Smooth height expansion",
    categories: ["accordions"] as CategoryId[],
    css: `@keyframes expand {
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 500px; }
}`,
    className: "animate-expand",
    tailwind: "animate-[expand_0.3s_ease-out]",
  },
  {
    id: "collapse",
    name: "Collapse",
    type: "Exit",
    description: "Smooth height collapse",
    categories: ["accordions"] as CategoryId[],
    css: `@keyframes collapse {
  from { opacity: 1; max-height: 500px; }
  to { opacity: 0; max-height: 0; }
}`,
    className: "animate-collapse",
    tailwind: "animate-[collapse_0.3s_ease-in]",
  },
  {
    id: "slide-down",
    name: "Slide Down",
    type: "Entrance",
    description: "Slide content down",
    categories: ["accordions", "popovers"] as CategoryId[],
    css: `@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}`,
    className: "animate-slide-down",
    tailwind: "animate-[slideDown_0.3s_ease-out]",
  },

  // Popover animations
  {
    id: "pop-in",
    name: "Pop In",
    type: "Entrance",
    description: "Bouncy pop entrance",
    categories: ["popovers", "tooltips", "modals"] as CategoryId[],
    css: `@keyframes popIn {
  0% { opacity: 0; transform: scale(0.8); }
  70% { transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
}`,
    className: "animate-pop-in",
    tailwind: "animate-[popIn_0.25s_ease-out]",
  },
  {
    id: "dropdown",
    name: "Dropdown",
    type: "Entrance",
    description: "Menu dropdown effect",
    categories: ["popovers"] as CategoryId[],
    css: `@keyframes dropdown {
  from { opacity: 0; transform: translateY(-8px) scaleY(0.95); }
  to { opacity: 1; transform: translateY(0) scaleY(1); }
}`,
    className: "animate-dropdown",
    tailwind: "animate-[dropdown_0.2s_ease-out]",
  },
  {
    id: "fade-scale",
    name: "Fade Scale",
    type: "Entrance",
    description: "Fade with subtle scale",
    categories: ["popovers", "tooltips"] as CategoryId[],
    css: `@keyframes fadeScale {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}`,
    className: "animate-fade-scale",
    tailwind: "animate-[fadeScale_0.15s_ease-out]",
  },

  // Card animations
  {
    id: "lift",
    name: "Lift",
    type: "Hover",
    description: "Lift up on hover",
    categories: ["cards", "buttons"] as CategoryId[],
    css: `@keyframes lift {
  from { transform: translateY(0); box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  to { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.15); }
}`,
    className: "animate-lift",
    tailwind: "hover:animate-[lift_0.2s_ease-out_forwards]",
  },
  {
    id: "tilt",
    name: "Tilt",
    type: "Hover",
    description: "3D tilt effect",
    categories: ["cards"] as CategoryId[],
    css: `@keyframes tilt {
  0% { transform: perspective(1000px) rotateX(0) rotateY(0); }
  100% { transform: perspective(1000px) rotateX(2deg) rotateY(2deg); }
}`,
    className: "animate-tilt",
    tailwind: "hover:animate-[tilt_0.3s_ease-out_forwards]",
  },
  {
    id: "glow",
    name: "Glow",
    type: "Hover",
    description: "Soft glow effect",
    categories: ["cards", "buttons", "inputs"] as CategoryId[],
    css: `@keyframes glow {
  0% { box-shadow: 0 0 0 rgba(var(--primary), 0); }
  100% { box-shadow: 0 0 20px rgba(var(--primary), 0.3); }
}`,
    className: "animate-glow",
    tailwind: "hover:animate-[glow_0.3s_ease-out_forwards]",
  },
  {
    id: "flip",
    name: "Flip",
    type: "Entrance",
    description: "3D flip entrance",
    categories: ["cards"] as CategoryId[],
    css: `@keyframes flip {
  from { opacity: 0; transform: perspective(1000px) rotateY(-90deg); }
  to { opacity: 1; transform: perspective(1000px) rotateY(0); }
}`,
    className: "animate-flip",
    tailwind: "animate-[flip_0.5s_ease-out]",
  },

  // Modal animations
  {
    id: "zoom-in",
    name: "Zoom In",
    type: "Entrance",
    description: "Zoom from center",
    categories: ["modals"] as CategoryId[],
    css: `@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); }
}`,
    className: "animate-zoom-in",
    tailwind: "animate-[zoomIn_0.3s_ease-out]",
  },
  {
    id: "zoom-out",
    name: "Zoom Out",
    type: "Exit",
    description: "Zoom out to close",
    categories: ["modals"] as CategoryId[],
    css: `@keyframes zoomOut {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.5); }
}`,
    className: "animate-zoom-out",
    tailwind: "animate-[zoomOut_0.2s_ease-in]",
  },
  {
    id: "slide-in-bottom",
    name: "Slide In Bottom",
    type: "Entrance",
    description: "Slide from bottom edge",
    categories: ["modals"] as CategoryId[],
    css: `@keyframes slideInBottom {
  from { opacity: 0; transform: translateY(100%); }
  to { opacity: 1; transform: translateY(0); }
}`,
    className: "animate-slide-in-bottom",
    tailwind: "animate-[slideInBottom_0.3s_ease-out]",
  },
  {
    id: "backdrop-blur",
    name: "Backdrop Blur",
    type: "Entrance",
    description: "Blur background effect",
    categories: ["modals"] as CategoryId[],
    css: `@keyframes backdropBlur {
  from { backdrop-filter: blur(0); opacity: 0; }
  to { backdrop-filter: blur(8px); opacity: 1; }
}`,
    className: "animate-backdrop-blur",
    tailwind: "animate-[backdropBlur_0.3s_ease-out]",
  },

  // Tooltip animations
  {
    id: "tooltip-appear",
    name: "Tooltip Appear",
    type: "Entrance",
    description: "Quick tooltip entrance",
    categories: ["tooltips"] as CategoryId[],
    css: `@keyframes tooltipAppear {
  from { opacity: 0; transform: translateY(4px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}`,
    className: "animate-tooltip-appear",
    tailwind: "animate-[tooltipAppear_0.15s_ease-out]",
  },
  {
    id: "tooltip-bounce",
    name: "Tooltip Bounce",
    type: "Entrance",
    description: "Bouncy tooltip entrance",
    categories: ["tooltips"] as CategoryId[],
    css: `@keyframes tooltipBounce {
  0% { opacity: 0; transform: translateY(8px); }
  60% { transform: translateY(-2px); }
  100% { opacity: 1; transform: translateY(0); }
}`,
    className: "animate-tooltip-bounce",
    tailwind: "animate-[tooltipBounce_0.3s_ease-out]",
  },
  {
    id: "fade-up",
    name: "Fade Up",
    type: "Entrance",
    description: "Fade in from below",
    categories: ["tooltips", "popovers"] as CategoryId[],
    css: `@keyframes fadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}`,
    className: "animate-fade-up",
    tailwind: "animate-[fadeUp_0.2s_ease-out]",
  },

  // Input animations
  {
    id: "focus-glow",
    name: "Focus Glow",
    type: "Focus",
    description: "Glow on input focus",
    categories: ["inputs"] as CategoryId[],
    css: `@keyframes focusGlow {
  from { box-shadow: 0 0 0 0 rgba(var(--primary), 0); }
  to { box-shadow: 0 0 0 3px rgba(var(--primary), 0.2); }
}`,
    className: "animate-focus-glow",
    tailwind: "focus:animate-[focusGlow_0.2s_ease-out_forwards]",
  },
  {
    id: "shake-error",
    name: "Shake Error",
    type: "Feedback",
    description: "Error shake feedback",
    categories: ["inputs"] as CategoryId[],
    css: `@keyframes shakeError {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-4px); }
  40%, 80% { transform: translateX(4px); }
}`,
    className: "animate-shake-error",
    tailwind: "animate-[shakeError_0.4s_ease-in-out]",
  },
  {
    id: "slide-label",
    name: "Slide Label",
    type: "Focus",
    description: "Floating label slide",
    categories: ["inputs"] as CategoryId[],
    css: `@keyframes slideLabel {
  from { transform: translateY(0); font-size: 1rem; }
  to { transform: translateY(-1.5rem); font-size: 0.75rem; }
}`,
    className: "animate-slide-label",
    tailwind: "animate-[slideLabel_0.2s_ease-out_forwards]",
  },
  {
    id: "border-draw",
    name: "Border Draw",
    type: "Focus",
    description: "Animated border draw",
    categories: ["inputs"] as CategoryId[],
    css: `@keyframes borderDraw {
  from { background-size: 0% 2px; }
  to { background-size: 100% 2px; }
}`,
    className: "animate-border-draw",
    tailwind: "focus:animate-[borderDraw_0.3s_ease-out_forwards]",
  },
] as const;

export type Animation = (typeof animations)[number];
export type AnimationId = Animation["id"];

export function getAnimationsByCategory(categoryId: CategoryId | "all") {
  if (categoryId === "all") {
    return animations;
  }
  return animations.filter((a) => a.categories.includes(categoryId));
}
