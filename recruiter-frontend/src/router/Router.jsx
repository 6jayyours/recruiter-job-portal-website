import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/commonpages/Landing";
import App from "../App.jsx"; 
import About from "../pages/commonpages/About.jsx";
import Contact from "../pages/commonpages/Contact.jsx";

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
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
