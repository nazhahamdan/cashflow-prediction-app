import { useState } from "react";
import { Calendar, TrendingUp, Loader2 } from "lucide-react";
import { useNavigate } from "react-router";

export function Prediction() {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState<string>("1");
  const [customDate, setCustomDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = () => {
    setIsLoading(true);
    // Simulate prediction loading
    setTimeout(() => {
      setIsLoading(false);
      navigate("/reports");
    }, 2500);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">
          Cash Flow Prediction
        </h1>
        <p className="text-gray-500 mt-1">
          Select a time period to forecast your company's cash flow
        </p>
      </div>

      {/* Main Prediction Card */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-gray-200 space-y-8">
          {/* Time Period Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Select Prediction Period
            </label>
            <div className="grid grid-cols-3 gap-4">
              {["1", "2", "3"].map((months) => (
                <button
                  key={months}
                  onClick={() => setSelectedPeriod(months)}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    selectedPeriod === months
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div className="text-3xl font-semibold text-gray-900 mb-1">
                    {months}
                  </div>
                  <div className="text-sm text-gray-600">
                    {months === "1" ? "Month" : "Months"}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Date Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Or Select Custom Date Range
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={customDate}
                onChange={(e) => setCustomDate(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Data Summary */}
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <h3 className="text-sm font-medium text-gray-900">
              Data Summary for Prediction
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Current Balance:</span>
                <span className="font-medium text-gray-900">145,000 MAD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly Revenue:</span>
                <span className="font-medium text-gray-900">150,000 MAD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly Expenses:</span>
                <span className="font-medium text-gray-900">85,000 MAD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Data Points:</span>
                <span className="font-medium text-gray-900">12 months</span>
              </div>
            </div>
          </div>

          {/* Prediction Settings */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">
              Advanced Settings (Optional)
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  Include macroeconomic factors
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  Include seasonal trends
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  Conservative estimation mode
                </span>
              </label>
            </div>
          </div>

          {/* Predict Button */}
          <button
            onClick={handlePredict}
            disabled={isLoading}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all font-medium text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Analyzing Cash Flow...
              </>
            ) : (
              <>
                <TrendingUp className="w-6 h-6" />
                Predict Cash Flow
              </>
            )}
          </button>

          {isLoading && (
            <div className="bg-blue-50 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <p className="text-sm text-blue-900">
                  Running prediction model...
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <p className="text-sm text-blue-900">
                  Analyzing historical patterns...
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
                <p className="text-sm text-blue-900">
                  Calculating risk factors...
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>How it works:</strong> Our AI-powered prediction model
            analyzes your historical financial data, industry trends, and
            macroeconomic indicators to forecast your cash flow with high
            accuracy.
          </p>
        </div>
      </div>
    </div>
  );
}
