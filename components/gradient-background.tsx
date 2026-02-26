"use client";

import { useEffect } from "react";

export function GradientBackground() {
  useEffect(() => {
    const root = document.documentElement;
    let rafId = 0;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;

    root.style.setProperty("--mouse-x", `${currentX}px`);
    root.style.setProperty("--mouse-y", `${currentY}px`);
    root.style.setProperty("--mouse-rx", "0.5");
    root.style.setProperty("--mouse-ry", "0.5");

    const animate = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;

      root.style.setProperty("--mouse-x", `${currentX}px`);
      root.style.setProperty("--mouse-y", `${currentY}px`);
      root.style.setProperty("--mouse-rx", `${Math.min(Math.max(currentX / window.innerWidth, 0), 1)}`);
      root.style.setProperty("--mouse-ry", `${Math.min(Math.max(currentY / window.innerHeight, 0), 1)}`);

      if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
        rafId = window.requestAnimationFrame(animate);
      } else {
        rafId = 0;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!rafId) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="gradient-bg">
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="gradient-orb orb-3" />
      <div className="gradient-orb orb-4" />
    </div>
  );
}
