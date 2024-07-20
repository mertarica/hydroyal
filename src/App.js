import React from 'react';
import { Helmet } from 'react-helmet';
// Screens
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Landing from './screens/Landing.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
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
