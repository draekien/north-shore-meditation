'use client';

import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export type TmStatsChartProps = {
  xAxisKey: string;
  type?: 'bar' | 'area';
  data: Array<Record<string, unknown>>;
  config: ChartConfig;
  title?: string;
};

export default function TmStatsChart({ xAxisKey, type = 'bar', data, config, title }: TmStatsChartProps) {
  if (type === 'area') {
    return (
      <>
        <p>{title}</p>
        <ChartContainer config={config} className="min-h-[200px] w-full">
          <AreaChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey={xAxisKey} tickLine={false} tickMargin={8} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            {Object.keys(config).map((x) => (
              <Area
                key={x}
                fill={config[x].color}
                dataKey={x}
                stroke={config[x].color}
                fillOpacity={0.4}
                type="natural"
              />
            ))}
          </AreaChart>
        </ChartContainer>
      </>
    );
  }

  return (
    <>
      <p>{title}</p>
      <ChartContainer config={config} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey={xAxisKey} tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          {Object.keys(config).map((x) => (
            <Bar key={x} fill={config[x].color} radius={4} dataKey={x} />
          ))}
        </BarChart>
      </ChartContainer>
    </>
  );
}
