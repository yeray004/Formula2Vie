import './index.css';
import App from './App';

import React from 'react';
import ReactDOM from 'react-dom/client';
//Rutas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Inicio from './pages/inicio/Inicio'
import Nosotros from './pages/nosotros/Nosotros'
import Productos from './pages/productos/Productos'
import Carrito from './pages/carrito/Carrito'

//import redux
import { createStore } from 'redux';
import {Provider} from 'react-redux'
//Import reducer component
import Reducer from './components/Reducer';
    const store= createStore(Reducer)


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
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
