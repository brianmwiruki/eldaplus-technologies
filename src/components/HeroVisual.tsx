"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  highlight: boolean;
}

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Generate balanced geometric nodes
    const nodeCount = Math.min(Math.floor(width / 22), 42);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const isSpecial = i % 5 === 0;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: isSpecial ? 3.5 : 2,
        baseRadius: isSpecial ? 3.5 : 2,
        highlight: isSpecial,
      });
    }

    // Mouse interaction with subtle repulsion / attraction
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const maxDistance = 140;

    const render = () => {
      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle interconnected geometric lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            const isBlueLink = nodes[i].highlight || nodes[j].highlight;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = isBlueLink
              ? `rgba(41, 151, 255, ${alpha * 1.4})`
              : `rgba(255, 255, 255, ${alpha * 0.8})`;
            ctx.lineWidth = isBlueLink ? 1.2 : 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move node
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off canvas boundaries
        if (node.x < 10 || node.x > width - 10) node.vx *= -1;
        if (node.y < 10 || node.y > height - 10) node.vy *= -1;

        // Distance from mouse
        const mdx = node.x - mouse.x;
        const mdy = node.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < 120) {
          const factor = (120 - mDist) / 120;
          node.x += (mdx / mDist) * factor * 1.5;
          node.y += (mdy / mDist) * factor * 1.5;
        }

        // Draw node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        if (node.highlight) {
          ctx.fillStyle = "#2997FF";
          ctx.shadowColor = "rgba(41, 151, 255, 0.8)";
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
        }
        ctx.fill();

        // Reset shadow
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[440px] md:min-h-[520px] flex items-center justify-center pointer-events-auto">
      {/* Subtle Apple-style radial ambient light */}
      <div className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full bg-gradient-to-tr from-[#2997FF]/20 via-[#2997FF]/10 to-transparent blur-[90px] pointer-events-none animate-pulse-glow" />
      
      {/* Central 3D Layered Digital Device Glass Graphic */}
      <div className="relative z-10 w-[280px] sm:w-[340px] md:w-[380px] aspect-square rounded-3xl apple-glass-dark border border-white/15 p-6 flex flex-col justify-between shadow-2xl shadow-black/80 backdrop-blur-2xl transition-all duration-700 hover:border-[#2997FF]/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2997FF] animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-white/70 uppercase">
              Core Engine • Active
            </span>
          </div>
          <span className="text-[10px] font-mono text-white/40 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
            PVT-6Y1R5335
          </span>
        </div>

        {/* Abstract Isometric Layer Stack Representation */}
        <div className="my-auto py-4 space-y-3">
          {/* Layer 3 - Cloud & Intelligence */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-white/[0.07] to-white/[0.02] border border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#2997FF]/20 border border-[#2997FF]/40 flex items-center justify-center text-[#2997FF] text-xs font-semibold">
                01
              </div>
              <div>
                <p className="text-xs font-medium text-white/90">Software Architecture</p>
                <p className="text-[10px] text-white/50">Scalable • Cloud-Native</p>
              </div>
            </div>
            <div className="text-[10px] font-mono text-[#2997FF]">99.9% Uptime</div>
          </div>

          {/* Layer 2 - Automation & Integration */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white/80 text-xs font-semibold">
                02
              </div>
              <div>
                <p className="text-xs font-medium text-white/90">Business Automation</p>
                <p className="text-[10px] text-white/50">Continuous Workflows</p>
              </div>
            </div>
            <div className="text-[10px] font-mono text-emerald-400">Automated</div>
          </div>

          {/* Layer 1 - Consultancy & Growth */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 text-xs font-semibold">
                03
              </div>
              <div>
                <p className="text-xs font-medium text-white/90">Digital Advisory</p>
                <p className="text-[10px] text-white/50">Strategic Roadmaps</p>
              </div>
            </div>
            <div className="text-[10px] font-mono text-white/40">Kenya & Beyond</div>
          </div>
        </div>

        {/* Bottom Metrics Pill */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Active Entity
          </span>
          <span className="font-mono text-white/40">ELDAPLUS TECH</span>
        </div>
      </div>

      {/* Floating Canvas behind */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
