import { useState } from "react";
import {
  Upload,
  FileSpreadsheet,
  Link2,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

export function DataImport() {
  const [selectedMethod, setSelectedMethod] = useState<
    "erp" | "file" | "manual" | null
  >(null);
  const [formData, setFormData] = useState({
    monthlyRevenue: "",
    monthlyExpenses: "",
    outstandingLoans: "",
    accountsReceivable: "",
    accountsPayable: "",
    operatingCosts: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Data Import</h1>
        <p className="text-gray-500 mt-1">
          Choose how you'd like to import your financial data
        </p>
      </div>

      {/* Import Method Cards */}
      <div className="grid grid-cols-3 gap-6">
        {/* ERP Connection */}
        <button
          onClick={() => setSelectedMethod("erp")}
          className={`bg-white rounded-xl p-6 border-2 transition-all text-left ${
            selectedMethod === "erp"
              ? "border-blue-500 shadow-lg"
              : "border-gray-200 hover:border-blue-300"
          }`}
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Link2 className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Connect to ERP
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Integrate with your existing ERP system for automatic data sync
          </p>
          <div className="flex items-center text-blue-600 text-sm font-medium">
            Connect System
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </button>

        {/* File Upload */}
        <button
          onClick={() => setSelectedMethod("file")}
          className={`bg-white rounded-xl p-6 border-2 transition-all text-left ${
            selectedMethod === "file"
              ? "border-blue-500 shadow-lg"
              : "border-gray-200 hover:border-blue-300"
          }`}
        >
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Upload className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Upload File
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Upload Excel or CSV files with your financial data
          </p>
          <div className="flex items-center text-blue-600 text-sm font-medium">
            Choose File
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </button>

        {/* Manual Entry */}
        <button
          onClick={() => setSelectedMethod("manual")}
          className={`bg-white rounded-xl p-6 border-2 transition-all text-left ${
            selectedMethod === "manual"
              ? "border-blue-500 shadow-lg"
              : "border-gray-200 hover:border-blue-300"
          }`}
        >
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <FileSpreadsheet className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Manual Entry
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Enter your financial data manually through a guided form
          </p>
          <div className="flex items-center text-blue-600 text-sm font-medium">
            Start Entry
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </button>
      </div>

      {/* ERP Connection Section */}
      {selectedMethod === "erp" && (
        <div className="bg-white rounded-xl p-8 border border-gray-200 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Connect Your ERP System
            </h2>
            <p className="text-gray-600">
              Select your ERP provider and authenticate to enable automatic data
              synchronization
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["SAP", "Oracle", "Microsoft Dynamics", "NetSuite", "QuickBooks", "Xero"].map(
              (erp) => (
                <button
                  key={erp}
                  className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg" />
                    <span className="font-medium text-gray-900">{erp}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              )
            )}
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              <strong>Note:</strong> You'll be redirected to your ERP's login
              page to authorize access. We only read financial data and never
              modify your records.
            </p>
          </div>
        </div>
      )}

      {/* File Upload Section */}
      {selectedMethod === "file" && (
        <div className="bg-white rounded-xl p-8 border border-gray-200 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Upload Financial Data
            </h2>
            <p className="text-gray-600">
              Drag and drop your Excel or CSV file, or click to browse
            </p>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-900 mb-2">
              Drop your file here
            </p>
            <p className="text-sm text-gray-500 mb-4">
              or click to browse from your computer
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Select File
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <p className="text-sm font-medium text-gray-900">
              Supported formats:
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Excel (.xlsx, .xls)</li>
              <li>• CSV (.csv)</li>
              <li>• Maximum file size: 10MB</li>
            </ul>
          </div>

          <a
            href="#"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
          >
            Download sample template
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      )}

      {/* Manual Entry Form */}
      {selectedMethod === "manual" && (
        <div className="bg-white rounded-xl p-8 border border-gray-200 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Enter Financial Data
            </h2>
            <p className="text-gray-600">
              Fill in your company's financial information
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Monthly Revenue */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Revenue
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  value={formData.monthlyRevenue}
                  onChange={(e) =>
                    handleInputChange("monthlyRevenue", e.target.value)
                  }
                  placeholder="150,000"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Monthly Expenses */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Expenses
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  value={formData.monthlyExpenses}
                  onChange={(e) =>
                    handleInputChange("monthlyExpenses", e.target.value)
                  }
                  placeholder="85,000"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Outstanding Loans */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Outstanding Loans
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  value={formData.outstandingLoans}
                  onChange={(e) =>
                    handleInputChange("outstandingLoans", e.target.value)
                  }
                  placeholder="250,000"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Accounts Receivable */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Accounts Receivable
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  value={formData.accountsReceivable}
                  onChange={(e) =>
                    handleInputChange("accountsReceivable", e.target.value)
                  }
                  placeholder="75,000"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Accounts Payable */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Accounts Payable
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  value={formData.accountsPayable}
                  onChange={(e) =>
                    handleInputChange("accountsPayable", e.target.value)
                  }
                  placeholder="45,000"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Operating Costs */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Operating Costs
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  value={formData.operatingCosts}
                  onChange={(e) =>
                    handleInputChange("operatingCosts", e.target.value)
                  }
                  placeholder="65,000"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <button className="px-6 py-2 text-gray-700 hover:text-gray-900">
              Cancel
            </button>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Save Data
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
