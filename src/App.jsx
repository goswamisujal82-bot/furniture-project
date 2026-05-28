import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import BestSeller from "./components/Navbar/BestSeller";
import Design from "./components/Design/Design";
import Partner from "./components/Partner/Partner";
import DesignServices from "./components/DesignServices/DesignServices";
import Layout from "./components/Layout/Layout";
import Warehousesale from "./components/Navbar/Warehousesale";

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element:<Home />},
      { path: "/", element: <Home /> },
      { path: "/bestseller", element: <BestSeller /> },
      { path: "/Design", element: <Design /> },
      { path: "/service", element: <DesignServices /> },
      { path: "/partner", element: <Partner /> },
      { path: "/warehousesale", element: <Warehousesale /> },
    ],
  },
]);


  return <RouterProvider router={router} />;
};

export default App;
