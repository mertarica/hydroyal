import React from 'react';
import { Helmet } from 'react-helmet';
// Screens
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Landing from './screens/Landing.jsx';
import Career from './screens/Career.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  { path: '/career', element: <Career /> },
]);

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
}
