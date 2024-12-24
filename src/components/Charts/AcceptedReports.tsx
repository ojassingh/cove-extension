"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { week: "Week 1", reports: 45 },
  { week: "Week 2", reports: 52 },
  { week: "Week 3", reports: 38 },
  { week: "Week 4", reports: 41 },
];


const chartConfig = {
  reports: {
    label: "Reports",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function AcceptedReports() {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Accepted Reports</CardTitle>
        <CardDescription>
          <div className="flex justify-between">
            <div>
              <p className="text-xl font-medium text-black">0</p>
              <span>This month</span>
            </div>

            <div className="">
              <span className="bg-red-500/10 text-red-500 rounded-lg p-1">
                -100%
              </span>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            // accessibilityLayer
            dataKey="reports"
            data={chartData}
          
            // margin={{
            //   left: 12,
            //   right: 12,
            // }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
            dataKey="week" 
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            // tickFormatter={(value) => value.slice(0, 3)}
          />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="reports"
              type="natural"
              data={chartData}
              // fill="var(--color-reports)"
              fillOpacity={0.4}
              // stroke="var(--color-reports)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
