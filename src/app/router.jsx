/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import DetailsPage from '../pages/Details/Details';
import ProductList from '../pages/ProductList/ProductList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [{
      path: '/products',
      element: <ProductList />,
    }, {
      path: 'products/:id',
      element: <DetailsPage />,
    }],
  },
]);

export default router;
