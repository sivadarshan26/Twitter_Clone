import React from 'react';
import Login from './pages/Login.jsx';
import * as ReactDOM from "react-dom/client";
import {  createBrowserRouter,  RouterProvider} from "react-router-dom";
import Sidebar from './components/Sidebar.jsx'
// import Home from './pages/Home.jsx'
import './index.css'
import Posts from './components/Posts.jsx'
import App from './App.jsx'
import Premium from './components/Premium.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/premium",
    element: <Premium />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
