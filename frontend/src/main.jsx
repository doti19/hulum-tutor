import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InterceptorProvider } from "./pages/utils/Interceptor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InterceptorProvider>
      <App />
    </InterceptorProvider>
  </React.StrictMode>
);
