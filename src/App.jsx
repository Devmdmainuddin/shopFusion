
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './page/Home';
import About from './page/About';
import Contacts from './page/Contacts';
import Shop from './page/Shop';
import Journal from './page/Journal';
import DashboardLayout from './Layout/DashboardLayout';
import Account from './page/Account';
import Dashboard from './page/dashboard/Dashboard';
import ProductDetails from './page/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/aboutUs",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contacts/>,
      },
      {
        path: "/shops",
        element: <Shop/>,
      },
      {
        path: "/journal",
        element: <Journal/>,
      },
      {
        path: "/account",
        element: <Account/>,
      },
      {
        path: "/details",
        element: <ProductDetails/>,
      },
      
    ],
  },
  {
    path: "/dashboard",
    // element: <DashboardLayout></DashboardLayout>,
    element: <Dashboard/>,
  }
  
]);

function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
