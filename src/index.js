import React from 'react';
import ReactDOM from 'react-dom/client';
//Rutas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Inicio from './pages/inicio/Inicio'
import Nosotros from './pages/nosotros/Nosotros'
import Productos from './pages/productos/Productos'
import Carrito from './pages/carrito/Carrito'


import './index.css';
import App from './App';

const router = createBrowserRouter([
{
    path:'/inicio',
    element:<Inicio/>
},
{
    path:'/nosotros',
    element:<Nosotros/>
},
{
    path:'/productos',
    element:<Productos/>
},
{
    path:'/carrito',
    element:<Carrito/>
},
{
    path:'/',
    element:<App/>
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
