//Styles
import './index.css';
//Components
import App from './App';
import Inicio from './pages/inicio/Inicio'
import Nosotros from './pages/nosotros/Nosotros'
import Productos from './pages/productos/Productos'
import Carrito from './pages/carrito/Carrito'
//import from React
import React from 'react';
import ReactDOM from 'react-dom/client';
//Routes functions
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import redux
import { createStore } from 'redux';
import {Provider} from 'react-redux' //let us get the context in all of our pages
//Import reducer component
import Reducer from './components/Reducer';
const store= createStore(Reducer)

//Routes from react-router-dom
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
        {/* Hepls us to use the global variables in different components */}
        <Provider store={store}>
            {/* Render of the select component */}
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
