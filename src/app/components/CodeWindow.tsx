"use client";

import { useEffect, useState, useRef } from "react";

const LOG_LINES = [
  { type: "info", text: "Initializing Kolitech deploy pipeline [v2.4.1]..." },
  { type: "info", text: "Target cluster node: production-primary-node-2" },
  { type: "warning", text: "ANALYZING LEGACY SYSTEM: PHP 7.4 + MySQL 5.7" },
  { type: "warning", text: "Found 32 unindexed queries causing transaction blocks" },
  { type: "warning", text: "P99 latency: 14.2 minutes for standard compliance export" },
  { type: "info", text: "Executing migration plan (12-week schedule)..." },
  { type: "info", text: "Initializing Next.js edge assets..." },
  { type: "info", text: "Configuring database cluster: PostgreSQL + TimescaleDB" },
  { type: "info", text: "Deploying high-performance NestJS transaction router..." },
  { type: "success", text: "✓ Session database fallback mechanism compiled" },
  { type: "success", text: "✓ Circuit breaker triggers activated for API channels" },
  { type: "success", text: "✓ Redis session token TTL auto-refresh optimized" },
  { type: "info", text: "Running stress test load: 8,000 concurrent requests..." },
  { type: "success", text: "✓ Bulk load test complete: 0.00% packet loss" },
  { type: "success", text: "✓ P99 latency reduced from 14.2m to 3.8s" },
  { type: "success", text: "DEPLOYMENT SUCCESSFUL • STABLE SYSTEM RELEASED" },
];

export default function CodeWindow() {
  const [lines, setLines] = useState<typeof LOG_LINES>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex >= LOG_LINES.length) {
      const timeout = setTimeout(() => {
        setLines([]);
        setCurrentIndex(0);
      }, 8000);
      return () => clearTimeout(timeout);
    }

    const interval = setTimeout(() => {
      setLines((prev) => [...prev, LOG_LINES[currentIndex]]);
      setCurrentIndex((prev) => prev + 1);
    }, 900 + Math.random() * 800);

    return () => clearTimeout(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="w-full border border-sand-border bg-obsidian text-platinum font-mono text-[11px] leading-relaxed shadow-2xl relative overflow-hidden select-none rounded-xl">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-[#222225] bg-[#1E1E21] px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FC5753]"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-[#FDBC40]"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-[#35C74A]"></div>
          <span className="text-[#88888D] font-semibold tracking-wider uppercase text-[9px] pl-2">
            DEPLOY LOG • SESSION MONITOR
          </span>
        </div>
        <div className="flex items-center space-x-2 text-[9px]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-emerald-500">LIVE</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={containerRef}
        className="h-80 overflow-y-auto p-4 space-y-2 select-text scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent"
      >
        <div className="text-zinc-600">
          [System time: {new Date().toISOString().split("T")[0]} 22:05:35 GMT+0530]
        </div>
        {lines.map((line, idx) => {
          let prefix = "[INFO]";
          let color = "text-zinc-400";
          if (line.type === "warning") {
            prefix = "[WARN]";
            color = "text-amber-accent";
          } else if (line.type === "success") {
            prefix = "[PASS]";
            color = "text-emerald-400";
          }

          return (
            <div key={idx} className="flex items-start space-x-2 transition-opacity duration-300">
              <span className={`font-bold select-none ${color}`}>{prefix}</span>
              <span className="text-zinc-300">{line.text}</span>
            </div>
          );
        })}
        {currentIndex < LOG_LINES.length && (
          <div className="flex items-center space-x-1">
            <span className="text-zinc-600 font-bold select-none">[EXEC]</span>
            <span className="h-4 w-2 bg-amber-accent animate-blink"></span>
          </div>
        )}
      </div>

      {/* Footer Spec strip */}
      <div className="border-t border-[#222225] bg-[#1E1E21] px-4 py-1.5 flex items-center justify-between text-[9px] text-[#88888D]">
        <span>PID: 88762</span>
        <span>CLUSTER: US-EAST-1</span>
        <span>UPTIME: 100.00%</span>
      </div>
    </div>
  );
}
