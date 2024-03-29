import React, { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// Compoenents
import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
} from "../components/PathIndex";

import { useStateContext } from "../contexts/contextProvider";

function AppRoot() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div
      className={`flex relative dark:bg-main-dark-bg ${
        currentMode === "Dark" ? "dark" : "light"
      }`}
    >
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent position="TopCenter" content="Settings">
          <button
            type="button"
            className={`text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-[#fff]`}
            style={{ backgroundColor: currentColor, borderRadius: "50%" }}
            onClick={() => setThemeSettings(true)}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>

      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-[#fff]">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}

      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>

        {themeSettings && <ThemeSettings />}
        <>
          <Outlet />
        </>
      </div>
    </div>
  );
}

export default AppRoot;
