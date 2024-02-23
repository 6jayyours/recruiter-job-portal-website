import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/commonpages/Landing";
import App from "../App.jsx"; 
import About from "../pages/commonpages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
