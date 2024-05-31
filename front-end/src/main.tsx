/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextTheme from "./context/context-theme";
import ContextLoading from "./context/context-loading";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextTheme>
      <ContextLoading>
        <App />
      </ContextLoading>
    </ContextTheme>
  </React.StrictMode>
);
