import * as d3 from "d3";
import { useEffect, useRef } from "react";
import type { ChartData } from './WeatherData';

export const WeatherChart = ({ data }: { data: ChartData[] }) => {
  const width = 800;
  const height = 400;
const xAxisRef = useRef<SVGGElement>(null);
const yAxisRef = useRef<SVGGElement>(null);


  const x = d3
    .scaleTime()
    .domain(d3.extent(data, d => d.time) as [Date, Date])
    .range([50, width - 50]);

  const y = d3
    .scaleLinear()
    .domain(d3.extent(data, d => d.temperature) as [number, number])
    .range([height - 50, 50]);

  const line = d3
    .line<ChartData>()
    .x(d => x(d.time))
    .y(d => y(d.temperature));

  const area = d3
    .area<ChartData>()
    .x(d => x(d.time))
    .y0(height - 50)
    .y1(d => y(d.temperature));

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);
    useEffect(() => {
    if (!xAxisRef.current || !yAxisRef.current) {
        return;
    }

    d3.select(xAxisRef.current)
        .call(xAxis);

    d3.select(yAxisRef.current)
        .call(yAxis);
    }, [xAxis, yAxis]);

  return (
    <svg viewBox="0 0 800 400" className="h-auto w-full">
       
        <path
            d={area(data) ?? ""}
            className="fill-blue-500/10"
        />
        <path
            d={line(data) ?? ""}
            fill="none"
            stroke="#2563eb"
            strokeWidth={3}
            strokeLinecap="round"
        />

            <path
            d={line(data) ?? ""}
            fill="none"
            className="stroke-blue-500"
            strokeWidth={3}
            strokeLinecap="round"
            />
        {y.ticks(5).map(value => (
        <line
            key={value}
            x1={50}
            x2={750}
            y1={y(value)}
            y2={y(value)}
            className="stroke-gray-200"
        />
        ))}
        <g ref={xAxisRef} />
        <g ref={yAxisRef} />
    </svg>
  );
};