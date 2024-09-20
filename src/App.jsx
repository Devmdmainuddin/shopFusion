
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
// import Cart from './page/dashboard/user/Cart';
import EdditProductCard from './page/dashboard/Admin/EdditProductCard';
import ManageProduct from './page/dashboard/Admin/ManageProduct';
import SignUp from './page/SignUp';
import Cart from './page/Cart'
import Checkout from './page/Checkout';
import ErrorPage from './page/ErrorPage';
import PrivateRoute from './routes/PrivateRoute';
import Payment from './payment/Payment';
import AdminHome from './page/dashboard/Admin/AdminHome';
import AdminRoute from './routes/AdminRoute';
import Profile from './page/dashboard/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
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
      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/registation",
        element: <Registation/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/checkout",
        element: <PrivateRoute> <Checkout/></PrivateRoute>
      },
      {
        path: "/payment",
        element: <PrivateRoute> <Payment/></PrivateRoute>
      },


      {
        path: "/product/:id",
        element:<ProductDetails /> ,
        loader: ({ params }) => fetch(`https://shop-fusion-server-one.vercel.app/product/${params.id}`)
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
    element:<PrivateRoute><Dashboard/></PrivateRoute> ,
    children:[
      // commone route
      // {
      //   path: "/dashboard/",
      //   element: <PrivateRoute><AdminHome/></PrivateRoute> ,
      // },
      {
        path: "/dashboard",
        element: <PrivateRoute><Profile/></PrivateRoute> ,
      },
      // admin && seller route
      {
        path: "/dashboard/addProduct",
        element:<PrivateRoute><AdminRoute> <AddProducts/></AdminRoute></PrivateRoute>,
      },
      {
        path: "/dashboard/edditProduct/:id",
        element: <PrivateRoute><AdminRoute><EdditProductCard/></AdminRoute></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`)
      },
      {
        path: "/dashboard/manageProduct",
        element:<PrivateRoute><AdminRoute><ManageProduct/></AdminRoute></PrivateRoute> ,
      },
        // admin  route
      {
        path: "/dashboard/manageUsers",
        element:<PrivateRoute><AdminRoute><ManageUsers/></AdminRoute> </PrivateRoute> ,
      },

        // user route
      {
        path: "/dashboard/cart",
        element: <Cart/>,
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
