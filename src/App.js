import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import routes from './MainRoutes';

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        transition={Bounce}
      />
    </>
  );
}