import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./AppRouter";
import "./backdrop.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error('Root element "#root" was not found.');
}

createRoot(rootElement).render(
    <StrictMode>
        <AppRouter />
    </StrictMode>
);
