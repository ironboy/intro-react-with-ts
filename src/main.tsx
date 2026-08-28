import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './index.css';
import App from './App.tsx';
import Start from './Start.tsx';
import ProductList from './ProductList.tsx';

// Basic usage of the react router
// for more advanced/automated examples see
// https://github.com/nodehill/fe25-code-along-pets-and-owners/tree/fe25-code-along-11-maj-login  

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Start /> },
      { path: '/products', element: <ProductList /> }
    ]
  }
]);


createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
