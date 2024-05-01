import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ResultPage from './pages/result';
import RootPage from './pages/root';
import LoadingPage from './pages/loading';
import CustomOutlet from './components/custom-outlet';
import ErrorPage from './pages/error';
import AfterServicePage from './pages/after-service';
import { FortuneProvider } from './context/fortune-context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CustomOutlet />,
    children: [
      {
        path: '',
        element: <RootPage />,
      },
      {
        path: '/loading',
        element: <LoadingPage />,
      },
      {
        path: '/after-service',
        element: <AfterServicePage />,
      },
    ],
  },
  {
    path: '/result',
    element: <ResultPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FortuneProvider>
      <RouterProvider router={router} />
    </FortuneProvider>
  </React.StrictMode>
);
