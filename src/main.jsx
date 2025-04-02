import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as React from "react";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 
import { AppRoutes } from "./Routers/Routes.jsx";
import "../src/output.css"; 
import {HeroUIProvider} from "@heroui/react";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroUIProvider>
      <AppRoutes />
    </HeroUIProvider>
  </StrictMode>
);
