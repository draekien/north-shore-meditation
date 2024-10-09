'use client';

import { Area, AreaChart, Bar, BarChart, CartesianGrid, Label, Line, LineChart, XAxis, YAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export type ChartType = 'line' | 'bar' | 'area';

export type TmStatsChartProps = {
  xAxisKey: string;
  type?: ChartType;
  data: Array<Record<string, unknown>>;
  config: ChartConfig;
  title?: string;
};

function TmAreaChart({ xAxisKey, data, config, title }: Omit<TmStatsChartProps, 'type'>) {
  return (
    <ChartContainer id={title} config={config} className="min-h-[200px] w-full">
      <AreaChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey={xAxisKey} tickLine={false} tickMargin={8} axisLine={false} padding={{ left: 12, right: 12 }} />
        <YAxis
          padding={{ top: 12 }}
          tickLine={false}
          axisLine={false}
          hide
          domain={[(dataMin: number) => Math.max(0, dataMin - 20), 'dataMax']}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        {Object.keys(config).map((x) => (
          <Area key={x} fill={config[x].color} dataKey={x} stroke={config[x].color} fillOpacity={0.4} type="natural" />
        ))}
      </AreaChart>
    </ChartContainer>
  );
}

function TmLineChart({ xAxisKey, data, config, title }: Omit<TmStatsChartProps, 'type'>) {
  return (
    <ChartContainer id={title} config={config} className="min-h-[200px] w-full">
      <LineChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
        <Label>test</Label>
        <CartesianGrid vertical={false} />
        <XAxis dataKey={xAxisKey} tickLine={false} tickMargin={8} axisLine={false} padding={{ left: 12, right: 12 }} />
        <YAxis
          padding={{ top: 12 }}
          tickLine={false}
          axisLine={false}
          hide
          domain={[(dataMin: number) => Math.max(0, dataMin - 20), 'dataMax']}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        {Object.keys(config).map((x) => (
          <Line key={x} dataKey={x} stroke={config[x].color} type="natural" />
        ))}
      </LineChart>
    </ChartContainer>
  );
}

function TmBarChart({ xAxisKey, data, config, title }: Omit<TmStatsChartProps, 'type'>) {
  return (
    <ChartContainer id={title} config={config} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey={xAxisKey} tickLine={false} tickMargin={10} axisLine={false} padding={{ left: 12, right: 12 }} />
        <YAxis
          padding={{ top: 12 }}
          tickLine={false}
          axisLine={false}
          hide
          domain={[(dataMin: number) => dataMin - 10, (dataMax: number) => dataMax + 10]}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        {Object.keys(config).map((x) => (
          <Bar key={x} fill={config[x].color} radius={4} dataKey={x} />
        ))}
      </BarChart>
    </ChartContainer>
  );
}

const charts = {
  line: TmLineChart,
  area: TmAreaChart,
  bar: TmBarChart,
} satisfies Record<ChartType, React.FunctionComponent<Omit<TmStatsChartProps, 'type'>>>;

export default function TmStatsChart({ type = 'bar', ...rest }: TmStatsChartProps) {
  const Chart = charts[type];

  if (!Chart) throw new Error(`Unsupported chart type ${type}}`);

  return (
    <>
      <label htmlFor={rest.title} className="mb-4 block text-base font-medium">
        {rest.title}
      </label>
      <Chart {...rest} />
    </>
  );
}
