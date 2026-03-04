import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Dashboard } from "./pages/Dashboard";
import { DataImport } from "./pages/DataImport";
import { Prediction } from "./pages/Prediction";
import { Reports } from "./pages/Reports";
import { Settings } from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "data-import", Component: DataImport },
      { path: "prediction", Component: Prediction },
      { path: "reports", Component: Reports },
      { path: "settings", Component: Settings },
    ],
  },
]);
