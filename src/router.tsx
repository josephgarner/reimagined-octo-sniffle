import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./landing";
import { ExhibitPage } from "./exhibit";
import { DisplayCabinet } from "./exhibit/components/displayCabinet";
import { FormulaSchedule } from "./exhibit/pages/formulaSchedule";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/projects",
    element: <ExhibitPage />,
    children: [
      {
        path: "",
        element: <DisplayCabinet />,
      },
      {
        path: "formula-schedule",
        element: <FormulaSchedule />,
      },
    ],
  },
]);
