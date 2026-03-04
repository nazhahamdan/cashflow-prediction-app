import { StabilityBadge } from "../components/StabilityBadge";
import { CashFlowChart } from "../components/CashFlowChart";
import {
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Download,
} from "lucide-react";

// Mock report data
const chartData = [
  { month: "Oct", actual: 132000, predicted: 132000 },
  { month: "Nov", actual: 128000, predicted: 128000 },
  { month: "Dec", actual: 145000, predicted: 145000 },
  { month: "Jan", predicted: 152000 },
  { month: "Feb", predicted: 158000 },
  { month: "Mar", predicted: 165000 },
];

export function Reports() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            Cash Flow Report
          </h1>
          <p className="text-gray-500 mt-1">
            3-month forecast analysis • Generated on March 4, 2026
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Download className="w-5 h-5" />
          Export Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6">
        {/* Forecasted Amount */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">
              Forecasted Cash Flow
            </span>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-3xl font-semibold text-gray-900">165,000 MAD</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-medium text-green-600">
              +13.8% increase
            </span>
          </div>
        </div>

        {/* Risk Score */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">
              Risk Score
            </span>
            <AlertCircle className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-3xl font-semibold text-gray-900">18%</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-medium text-green-600">Low Risk</span>
          </div>
        </div>

        {/* Stability */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">Stability</span>
          </div>
          <div className="mt-3">
            <StabilityBadge status="stable" size="md" />
          </div>
          <p className="text-xs text-gray-500 mt-2">Excellent outlook</p>
        </div>

        {/* Confidence */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">
              Prediction Confidence
            </span>
            <CheckCircle className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-3xl font-semibold text-gray-900">92%</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-medium text-blue-600">
              High confidence
            </span>
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Historical vs Predicted Cash Flow
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Comparison of actual and forecasted values
          </p>
        </div>
        <div className="h-80">
          <CashFlowChart data={chartData} showHistorical={true} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Macroeconomic Factors */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Macroeconomic Influences
          </h2>
          <div className="space-y-4">
            {/* Inflation */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">
                    Inflation Rate
                  </span>
                  <span className="text-sm font-semibold text-orange-600">
                    3.2%
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Moderate inflation expected to impact operating costs
                </p>
                <div className="mt-2 bg-orange-50 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: "64%" }}
                  />
                </div>
              </div>
            </div>

            {/* GDP */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">
                    GDP Growth
                  </span>
                  <span className="text-sm font-semibold text-green-600">
                    2.8%
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Positive economic growth supporting revenue expansion
                </p>
                <div className="mt-2 bg-green-50 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">
                    Interest Rates
                  </span>
                  <span className="text-sm font-semibold text-blue-600">
                    4.5%
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Stable rates favorable for financing and loan management
                </p>
                <div className="mt-2 bg-blue-50 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "55%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            AI Recommendations
          </h2>
          <div className="space-y-4">
            {/* Positive Recommendations */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-green-900 mb-1">
                    Strong Cash Position
                  </h3>
                  <p className="text-sm text-green-800">
                    Your projected cash flow shows healthy growth. Consider
                    allocating excess capital to strategic investments or debt
                    reduction.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-blue-900 mb-1">
                    Optimize Working Capital
                  </h3>
                  <p className="text-sm text-blue-800">
                    Review accounts receivable aging. Accelerating collections
                    could improve cash position by 8-12%.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-1">
                    Growth Opportunity
                  </h3>
                  <p className="text-sm text-purple-800">
                    Current stability supports expansion initiatives. This is a
                    favorable time for calculated growth investments.
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all font-medium flex items-center justify-center gap-2">
              View Detailed Action Plan
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Risk Breakdown */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Risk Factor Breakdown
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Liquidity Risk */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Liquidity Risk
              </span>
              <span className="text-sm font-semibold text-green-600">12%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "12%" }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">Low - Excellent liquidity position</p>
          </div>

          {/* Market Risk */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Market Risk
              </span>
              <span className="text-sm font-semibold text-orange-600">24%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: "24%" }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">Moderate - Monitor industry trends</p>
          </div>

          {/* Operational Risk */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Operational Risk
              </span>
              <span className="text-sm font-semibold text-green-600">15%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "15%" }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">Low - Stable operations</p>
          </div>
        </div>
      </div>

      {/* Key Metrics Table */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Detailed Financial Metrics
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Metric
                </th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">
                  Current
                </th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">
                  Month 1
                </th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">
                  Month 2
                </th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">
                  Month 3
                </th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">
                  Change
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  metric: "Cash Balance",
                  current: "145,000 MAD",
                  m1: "152,000 MAD",
                  m2: "158,000 MAD",
                  m3: "165,000 MAD",
                  change: "+13.8%",
                  positive: true,
                },
                {
                  metric: "Operating Cash Flow",
                  current: "65,000 MAD",
                  m1: "68,000 MAD",
                  m2: "  71,000 MAD",
                  m3: "73,000 MAD",
                  change: "+12.3%",
                  positive: true,
                },
                {
                  metric: "Accounts Receivable",
                  current: "75,000 MAD",
                  m1: "72,000 MAD",
                  m2: "70,000 MAD",
                  m3: "68,000 MAD",
                  change: "-9.3%",
                  positive: true,
                },
                {
                  metric: "Debt Service Ratio",
                  current: "1.8",
                  m1: "1.9",
                  m2: "2.0",
                  m3: "2.1",
                  change: "+16.7%",
                  positive: true,
                },
              ].map((row, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">
                    {row.metric}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700 text-right">
                    {row.current}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700 text-right">
                    {row.m1}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700 text-right">
                    {row.m2}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700 text-right">
                    {row.m3}
                  </td>
                  <td
                    className={`py-3 px-4 text-sm font-medium text-right ${
                      row.positive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {row.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
