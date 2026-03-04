import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

interface CashFlowChartProps {
  data: Array<{
    month: string;
    actual?: number;
    predicted: number;
  }>;
  showHistorical?: boolean;
}

export function CashFlowChart({
  data,
  showHistorical = false,
}: CashFlowChartProps) {
  const formatCurrency = (value: number) => {
    return `$${(value / 1000).toFixed(0)}K`;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="month" stroke="#6B7280" style={{ fontSize: "12px" }} />
        <YAxis
          stroke="#6B7280"
          style={{ fontSize: "12px" }}
          tickFormatter={formatCurrency}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            padding: "12px",
          }}
          formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
        />
        <Legend />
        {showHistorical && (
          <Area
            type="monotone"
            dataKey="actual"
            stroke="#10B981"
            strokeWidth={2}
            fill="url(#colorActual)"
            name="Historical"
          />
        )}
        <Area
          type="monotone"
          dataKey="predicted"
          stroke="#3B82F6"
          strokeWidth={2}
          fill="url(#colorPredicted)"
          name="Predicted"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
