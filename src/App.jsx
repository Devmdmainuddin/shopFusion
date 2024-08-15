
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
// import DashboardLayout from './Layout/DashboardLayout';
import Account from './page/Account';
import Dashboard from './page/dashboard/Dashboard';
import ProductDetails from './page/ProductDetails';
import Login from './page/Login';
// import SignUp from './page/SignUp';
import Registation from './page/Registation';
import ManageUsers from './page/dashboard/Admin/ManageUsers';
import AddProducts from './components/form/AddProducts';
import Cart from './page/dashboard/user/Cart';
import EdditProductCard from './page/dashboard/Admin/EdditProductCard';
import ManageProduct from './page/dashboard/Admin/ManageProduct';

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
        path: "/login",
        element: <Login/>,
      },
      // {
      //   path: "/signup",
      //   element: <SignUp/>,
      // },
      {
        path: "/registation",
        element: <Registation/>,
      },
      {
        path: "/product/:id",
        element:<ProductDetails /> ,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`)
      },
      // {
      //   path: "/chackout/:id",
      //   element:<Chackout></Chackout>,
      //   loader:({ params })=>fetch(`${import.meta.env.VITE_API_URL}/ScholarShips/${params.id}`)
      // }, 
    ],
  },
  {
    path: "/dashboard",
    // element: <DashboardLayout></DashboardLayout>,
    element: <Dashboard/>,
    children:[
      {
        path: "/dashboard/addProduct",
        element: <AddProducts/>,
      },
      {
        path: "/dashboard/edditProduct/:id",
        element: <EdditProductCard/>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`)
      },
      {
        path: "/dashboard/manageProduct",
        element: <ManageProduct/>,
      },

      {
        path: "/dashboard/cart",
        element: <Cart/>,
      },
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers/>,
      },
    ]
  }
  
]);

function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
