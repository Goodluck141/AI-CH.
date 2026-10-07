import React, { useState } from 'react';
import { DimensionScoreResult } from '../types/assessment';

interface RadarChartProps {
  dimensions: DimensionScoreResult[];
}

export const RadarChart: React.FC<RadarChartProps> = ({ dimensions }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const size = 380;
  const center = size / 2;
  const radius = center - 55;
  const levels = [20, 40, 60, 80, 100];
  const count = dimensions.length || 5;

  // Helper to compute (x, y) given an angle and value (0-100)
  const getCoordinates = (value: number, index: number) => {
    const angle = (Math.PI * 2 * index) / count - Math.PI / 2;
    const r = (value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Generate polygon points string for a dataset
  const generatePolygonPoints = (getValue: (d: DimensionScoreResult) => number) => {
    return dimensions
      .map((d, i) => {
        const { x, y } = getCoordinates(getValue(d), i);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  };

  const userPoints = generatePolygonPoints((d) => d.userScore);
  const benchmarkPoints = generatePolygonPoints((d) => d.benchmarkScore);

  return (
    <div className="relative flex flex-col items-center">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[380px] h-auto overflow-visible select-none"
      >
        <defs>
          <radialGradient id="userGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3D7EFF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#3D7EFF" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {/* Concentric grid polygons */}
        {levels.map((lvl) => {
          const gridPoints = Array.from({ length: count })
            .map((_, i) => {
              const { x, y } = getCoordinates(lvl, i);
              return `${x.toFixed(1)},${y.toFixed(1)}`;
            })
            .join(' ');

          return (
            <g key={lvl}>
              <polygon
                points={gridPoints}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
              />
              <text
                x={center}
                y={center - (lvl / 100) * radius}
                fill="rgba(255, 255, 255, 0.25)"
                fontSize="9"
                fontFamily="monospace"
                textAnchor="middle"
                dy="-3"
              >
                {lvl}%
              </text>
            </g>
          );
        })}

        {/* Axis rays */}
        {dimensions.map((d, i) => {
          const { x, y } = getCoordinates(100, i);
          const labelCoord = getCoordinates(118, i);

          return (
            <g key={d.dimension}>
              <line
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
              />
              {/* Axis Label */}
              <text
                x={labelCoord.x}
                y={labelCoord.y}
                fill={hoveredIndex === i ? '#93C5FD' : '#94A3B8'}
                fontSize="11"
                fontWeight={hoveredIndex === i ? '600' : '500'}
                textAnchor="middle"
                dominantBaseline="central"
                className="transition-colors duration-150"
              >
                {d.label.split(' ')[0]}
              </text>
            </g>
          );
        })}

        {/* Top Practitioner Benchmark Polygon (Slate/White dashed) */}
        <polygon
          points={benchmarkPoints}
          fill="rgba(148, 163, 184, 0.08)"
          stroke="#94A3B8"
          strokeWidth="1.75"
          strokeDasharray="4 3"
        />

        {/* User Polygon (Electric Blue with Gradient Fill) */}
        <polygon
          points={userPoints}
          fill="url(#userGlow)"
          stroke="#3D7EFF"
          strokeWidth="2.5"
          className="transition-all duration-300"
        />

        {/* Benchmark Points */}
        {dimensions.map((d, i) => {
          const pt = getCoordinates(d.benchmarkScore, i);
          return (
            <circle
              key={`bm-${d.dimension}`}
              cx={pt.x}
              cy={pt.y}
              r="3.5"
              fill="#94A3B8"
              stroke="#08090A"
              strokeWidth="1.5"
            />
          );
        })}

        {/* User Points with hover interaction */}
        {dimensions.map((d, i) => {
          const pt = getCoordinates(d.userScore, i);
          const isHovered = hoveredIndex === i;

          return (
            <g
              key={`usr-${d.dimension}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="cursor-pointer"
            >
              <circle
                cx={pt.x}
                cy={pt.y}
                r={isHovered ? '6.5' : '4.5'}
                fill="#3D7EFF"
                stroke="#FFFFFF"
                strokeWidth="2"
                className="transition-all duration-150"
              />
            </g>
          );
        })}
      </svg>

      {/* Legend below chart */}
      <div className="mt-2 flex items-center justify-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-6 rounded-full bg-blue-500" />
          <span className="text-slate-200 font-medium">Your Score</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-6 border-t-2 border-dashed border-slate-400" />
          <span className="text-slate-400">Top Practitioner Benchmark</span>
        </div>
      </div>
    </div>
  );
};
