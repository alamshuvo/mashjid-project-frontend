import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

// Pages

// Layout


const router = createBrowserRouter([
 
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ],
  },
//   {
//     path: "/login",
//     element: <Login />,
//   },
]);

export default router;