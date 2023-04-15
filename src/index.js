import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

console.log("aaa");

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
