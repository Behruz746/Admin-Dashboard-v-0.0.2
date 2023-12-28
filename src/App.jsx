import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Editor,
  ColorPicker,
  Line,
  ErrorPage,
} from "./pages/PathIndex";

import AppRoot from "./layout/AppRoot";

import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppRoot />,
      errorElement: <ErrorPage />,
      children: [
        // this is Dashboard
        { path: "/", index: true, element: <Ecommerce /> },
        { path: "/ecommerce", element: <Ecommerce /> },
        // Pages
        { path: "/orders", element: <Orders /> },
        { path: "/employees", element: <Employees /> },
        { path: "/customers", element: <Customers /> },
        // Apps
        { path: "/kanban", element: <Kanban /> },
        { path: "/editor", element: <Editor /> },
        { path: "/calendar", element: <Calendar /> },
        { path: "/color-picker", element: <ColorPicker /> },
        // Charts
        { path: "/line", element: <Line /> },
        { path: "/area", element: <Area /> },
        { path: "/bar", element: <Bar /> },
        { path: "/pie", element: <Pie /> },
        { path: "/financial", element: <Financial /> },
        { path: "/color-mapping", element: <ColorMapping /> },
        { path: "/pyramid", element: <Pyramid /> },
        { path: "/stacked", element: <Stacked /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
