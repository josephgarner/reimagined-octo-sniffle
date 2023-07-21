import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./landing";
import { theme } from "./theme";
import { ThemeContext } from "./components/ui/context/themeContext";
import { AppContainer } from "./components/ui";
import { Navigation } from "./components/nav/navigation";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

root.render(
  <React.StrictMode>
    <ThemeContext theme={theme}>
      <AppContainer nav={<Navigation />}>
        <RouterProvider router={router} />
      </AppContainer>
    </ThemeContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
