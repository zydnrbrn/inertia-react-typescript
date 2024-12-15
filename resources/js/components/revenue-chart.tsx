import { Line, LineChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { type ChartConfig } from "@/components/ui/chart";

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig;

export function RevenueChart() {
    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 2104, mobile: 14 },
    ];

    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <LineChart accessibilityLayer data={chartData}>
                <Line type="monotone" dataKey="desktop" stroke="var(--color-desktop)" strokeWidth={2} />
                <Line type="monotone" dataKey="mobile" stroke="var(--color-mobile)" strokeWidth={2} />
            </LineChart>
        </ChartContainer>
    );
}
