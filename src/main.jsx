import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "normalize.css";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/contextProvider";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCf0x0R3xbf1x0ZFZMY1pbRnFPMyBoS35RdURhW3xedHVUR2hcUUd0"
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
