import { ErrorElement } from './components/ErrorElement';
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { loader } from './pages/Landing';
import { loaderProducts } from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error/>,

    children: [
      {
        index: true,
        element: <Landing/>,
        loader: loader
      },
      {
        path: 'products',
        element: <Products/>,
        loader: loaderProducts
      },
      {
        path: 'products/:id',
        element: <SingleProduct/>
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'about',
        element: <About/>,
        errorElement: <ErrorElement/>
      },
      {
        path: 'checkout',
        element: <Checkout/>
      },
      {
        path: 'orders',
        element: <Orders/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <Error/>
  },
  {
    path: '/register',
    element: <Register/>,
    errorElement: <Error/>
  }
]);

function App() {
  // const { name } = useAppSelector((state) => state.userState);
  // console.log(name);

  return <RouterProvider router={router}/>

  ;
}
export default App;
