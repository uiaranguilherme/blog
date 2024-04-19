/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextApp from "./context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextApp>
      <App />
    </ContextApp>
  </React.StrictMode>
);
