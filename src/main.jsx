import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Characters from './Pages/Characters';
import Quotes from './Pages/Quotes';
import Deaths from './Pages/Deaths';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import Episodes from './Pages/Episodes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/characters',
    element: <Characters />,
  },
  {
    path: '/episodes',
    element: <Episodes />,
  },
  {
    path: '/quotes',
    element: <Quotes />,
  },
  {
    path: '/deaths',
    element: <Deaths />,
  },
]);
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
