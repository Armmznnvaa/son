
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserRoot from './UserRoot';
import Home from './pages/Home';
import Add from './pages/Add';
import Basket from './pages/Basket';
import Wishlist from './pages/Wishlist';
import Details from './pages/Details';
import BasketItemContextProvider from './context/BasketItemContext';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserRoot/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/Add",
          element:<Add/>,
        },
        {
          path:"/Basket",
          element:<Basket/>,
        },
        {
          path:"/Wishlist",
          element:<Wishlist/>,
        },
        {
          path:"/Details/:id",
          element:<Details/>,
        },
      ]
    },
  ]);
  return (
    <>
    <BasketItemContextProvider>
    <RouterProvider router={router} />
    </BasketItemContextProvider>
   
  
    
    </>
  )
}

export default App
