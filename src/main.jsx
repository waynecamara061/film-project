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
    path: "*",
    element: <Erro />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
