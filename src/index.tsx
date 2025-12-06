import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const root = document.getElementById("root");

if (!root) {
	throw new Error("No root yo! go an getch youself a root div!!");
}

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
