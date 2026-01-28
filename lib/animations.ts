export const animations = [
  {
    id: "fade-in",
    name: "Fade In",
    type: "Entrance",
    css: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
    className: "animate-fade-in",
    tailwind: "animate-[fadeIn_0.5s_ease-in-out]",
  },
  {
    id: "slide-up",
    name: "Slide Up",
    type: "Entrance",
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
    css: `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}`,
    className: "animate-shake",
    tailwind: "animate-[shake_0.5s_ease-in-out]",
  },
  {
    id: "scale",
    name: "Scale",
    type: "Entrance",
    css: `@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}`,
    className: "animate-scale",
    tailwind: "animate-[scaleIn_0.3s_ease-out]",
  },
] as const;

export type Animation = (typeof animations)[number];
export type AnimationId = Animation["id"];
