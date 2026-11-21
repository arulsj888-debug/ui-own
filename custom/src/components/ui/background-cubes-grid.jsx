import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function BackgroundCubesGrid({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    // Mouse state
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const resize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Cube parameters
    const size = 32; // Cube edge length
    const dx = size * Math.sqrt(3); // Horizontal spacing
    const dy = size * 1.5; // Vertical spacing
    let time = 0;

    const render = () => {
      time += 0.02;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      // Grid boundaries
      const cols = Math.ceil(width / dx) + 4;
      const rows = Math.ceil(height / dy) + 4;

      for (let r = -2; r < rows; r++) {
        for (let c = -2; c < cols; c++) {
          const x = c * dx + (r % 2 === 0 ? 0 : dx / 2);
          const y = r * dy;

          const dist = Math.hypot(x - mouse.x, y - mouse.y);
          const maxDist = 260;

          // Wave calculation
          let elevation = 0;
          let glow = 0;

          if (dist < maxDist) {
            const factor = 1 - dist / maxDist;
            elevation = Math.sin(factor * Math.PI - time * 2) * 14 * factor;
            glow = factor;
          }

          // Subtle ambient idle float
          const idleWave = Math.sin(time + (x * 0.01) + (y * 0.01)) * 2;
          const totalElevation = elevation + idleWave;

          drawIsometricCube(ctx, x, y - totalElevation, size, glow);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    function drawIsometricCube(ctx, cx, cy, s, glow) {
      const halfDx = (s * Math.sqrt(3)) / 2;
      const halfDy = s / 2;

      // Top Face vertices
      const pTop = { x: cx, y: cy - s };
      const pRight = { x: cx + halfDx, y: cy - halfDy };
      const pCenter = { x: cx, y: cy };
      const pLeft = { x: cx - halfDx, y: cy - halfDy };

      // Bottom vertices
      const pBottom = { x: cx, y: cy + s };
      const pBottomLeft = { x: cx - halfDx, y: cy + halfDy };
      const pBottomRight = { x: cx + halfDx, y: cy + halfDy };

      // Top Face
      ctx.beginPath();
      ctx.moveTo(pTop.x, pTop.y);
      ctx.lineTo(pRight.x, pRight.y);
      ctx.lineTo(pCenter.x, pCenter.y);
      ctx.lineTo(pLeft.x, pLeft.y);
      ctx.closePath();
      ctx.fillStyle = glow > 0
        ? `rgba(${Math.floor(248 + glow * 7)}, ${Math.floor(250 + glow * 5)}, 255, 0.95)`
        : "rgba(255, 255, 255, 0.85)";
      ctx.fill();
      ctx.strokeStyle = glow > 0 ? "rgba(99, 102, 241, 0.25)" : "rgba(226, 232, 240, 0.7)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Left Face
      ctx.beginPath();
      ctx.moveTo(pLeft.x, pLeft.y);
      ctx.lineTo(pCenter.x, pCenter.y);
      ctx.lineTo(pBottom.x, pBottom.y);
      ctx.lineTo(pBottomLeft.x, pBottomLeft.y);
      ctx.closePath();
      ctx.fillStyle = glow > 0
        ? `rgba(${Math.floor(241 - glow * 20)}, ${Math.floor(245 - glow * 15)}, 255, 0.8)`
        : "rgba(241, 245, 249, 0.6)";
      ctx.fill();
      ctx.stroke();

      // Right Face
      ctx.beginPath();
      ctx.moveTo(pCenter.x, pCenter.y);
      ctx.lineTo(pRight.x, pRight.y);
      ctx.lineTo(pBottomRight.x, pBottomRight.y);
      ctx.lineTo(pBottom.x, pBottom.y);
      ctx.closePath();
      ctx.fillStyle = glow > 0
        ? `rgba(${Math.floor(226 - glow * 25)}, ${Math.floor(232 - glow * 20)}, 250, 0.85)`
        : "rgba(226, 232, 240, 0.65)";
      ctx.fill();
      ctx.stroke();
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
}
