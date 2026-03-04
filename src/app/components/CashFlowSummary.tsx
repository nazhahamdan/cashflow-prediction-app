import { StabilityBadge, StabilityStatus } from "./StabilityBadge";
import { TrendingUp, Calendar, DollarSign } from "lucide-react";

interface CashFlowSummaryProps {
  currentBalance: number;
  forecastAmount: number;
  forecastPeriod: string;
  stabilityStatus: StabilityStatus;
}

export function CashFlowSummary({
  currentBalance,
  forecastAmount,
  forecastPeriod,
  stabilityStatus,
}: CashFlowSummaryProps) {
  const change = forecastAmount - currentBalance;
  const changePercent = ((change / currentBalance) * 100).toFixed(1);
  const isPositive = change >= 0;

  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Current Balance */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500">
            Current Cash Balance
          </span>
          <DollarSign className="w-5 h-5 text-blue-500" />
        </div>
        <div className="text-3xl font-semibold text-gray-900">
          ${currentBalance.toLocaleString()}
        </div>
        <p className="text-xs text-gray-500 mt-2">As of today</p>
      </div>

      {/* Forecast */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500">
            {forecastPeriod} Forecast
          </span>
          <Calendar className="w-5 h-5 text-blue-500" />
        </div>
        <div className="text-3xl font-semibold text-gray-900">
          ${forecastAmount.toLocaleString()}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span
            className={`text-xs font-medium ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPositive ? "+" : ""}${Math.abs(change).toLocaleString()} (
            {isPositive ? "+" : ""}
            {changePercent}%)
          </span>
        </div>
      </div>

      {/* Stability */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500">
            Stability Indicator
          </span>
          <TrendingUp className="w-5 h-5 text-blue-500" />
        </div>
        <div className="mt-4">
          <StabilityBadge status={stabilityStatus} size="lg" />
        </div>
        <p className="text-xs text-gray-500 mt-2">Based on prediction model</p>
      </div>
    </div>
  );
}
