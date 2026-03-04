import { CashFlowSummary } from "../components/CashFlowSummary";
import { CashFlowChart } from "../components/CashFlowChart";
import { Link } from "react-router";
import { ArrowRight, TrendingUp, AlertCircle } from "lucide-react";

// Mock data for dashboard
const chartData = [
  { month: "Sep", actual: 125000, predicted: 125000 },
  { month: "Oct", actual: 132000, predicted: 132000 },
  { month: "Nov", actual: 128000, predicted: 128000 },
  { month: "Dec", actual: 145000, predicted: 145000 },
  { month: "Jan", predicted: 152000 },
  { month: "Feb", predicted: 158000 },
  { month: "Mar", predicted: 165000 },
];

export function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Overview of your cash flow predictions
        </p>
      </div>

      {/* Summary Cards */}
      <CashFlowSummary
        currentBalance={145000}
        forecastAmount={165000}
        forecastPeriod="3 Month"
        stabilityStatus="stable"
      />

      {/* Main Chart */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Projected Cash Flow Evolution
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Historical and predicted cash flow over time
            </p>
          </div>
          <Link
            to="/prediction"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
          >
            Run New Prediction
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="h-80">
          <CashFlowChart data={chartData} showHistorical={true} />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-6">
        {/* Import Data */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <TrendingUp className="w-10 h-10 mb-4 opacity-80" />
          <h3 className="text-xl font-semibold mb-2">Import New Data</h3>
          <p className="text-blue-100 text-sm mb-4">
            Connect your ERP system or upload financial data to improve
            predictions
          </p>
          <Link
            to="/data-import"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* View Reports */}
        <div className="bg-white rounded-xl p-6 border-2 border-blue-100">
          <AlertCircle className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            View Detailed Reports
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Access in-depth analysis, risk scores, and personalized
            recommendations
          </p>
          <Link
            to="/reports"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
          >
            View Reports
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {[
            {
              action: "Prediction completed",
              description: "3-month cash flow forecast generated",
              time: "2 hours ago",
              status: "success",
            },
            {
              action: "Data imported",
              description: "CSV file uploaded successfully",
              time: "1 day ago",
              status: "success",
            },
            {
              action: "Report generated",
              description: "Q1 2026 cash flow analysis",
              time: "3 days ago",
              status: "success",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {item.action}
                </p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <span className="text-xs text-gray-400">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
