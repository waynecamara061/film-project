import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Filme from './pages/Filme/FIlme.jsx';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import Erro from './pages/Erro/index.jsx';
import Favoritos from './pages/Favoritos/index.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/filme/:id",
    element: <Filme />,
  },
  {
    path: "/favoritos",
    element: <Favoritos />,
  },
  {
    path: "*",
    element: <Erro />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <ToastContainer autoClose={3000}/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
