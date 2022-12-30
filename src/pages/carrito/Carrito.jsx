import './Carrito.css'
//Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NavBarMobile from '../../components/NavBarMobile'
//import from react
import React from 'react'
//import useSelector and useDispatch from redux
import { useSelector, useDispatch } from 'react-redux'
//import WhatsApp message
import ReactWhatsapp from "react-whatsapp";

function Carrito() {
    //Array that creates each card of the cart
    const cart = useSelector((state) => state)
    //console.log(cart)
    const dispatch = useDispatch()
    //Function that calculates the total price of all items
    const addition = (acc, currentValue) => {
        return acc + currentValue.price * currentValue.quantity
    }
    //Full price to pay
    const total = cart.reduce(addition, 0)
    //Var that count the total itenms in the cart
    let totalItems = 0;
    //Function that creates the final result of the amount of items
    cart.map((products) => { totalItems += products.quantity });
    return (
        <>
            <Header />
            <main className="main main-car">
                <section className='container-carrito'>
                    {/* Cart Item */}
                    {cart.map((product) =>
                        <div className='p-car-container' key={product.id}>
                            <img src={product.image} alt="" className='img-card-car' />
                            <div className='flex-container'>
                                <p>{product.name}</p>
                                <div className='flex-sub-cont'>
                                    <div>
                                        <p>{product.category}</p>
                                        <p>$ {product.price * product.quantity}</p>
                                    </div>
                                    <div className='cont-buttons'>
                                        <button onClick={() => {
                                            if (product.quantity > 1) {
                                                dispatch({ type: 'DECREASE', payload: product })
                                            } else {
                                                dispatch({ type: 'REMOVE', payload: product })
                                            }
                                        }}
                                            className='btn-add-sub'>-</button>
                                        <div>
                                            <p><b>{product.quantity}</b></p>
                                        </div>
                                        <button onClick={() => dispatch({ type: 'INCREASE', payload: product })} className='btn-add-sub'>+</button>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => dispatch({ type: 'REMOVE', payload: product })} className='delete-product'>X</button>
                        </div>)}
                </section>
                {/* Continue Purchase */}
                <section className='section-car-total'>
                    <div className='car-total'>
                        <h5>{`Productos en el carrito: ${totalItems}`}</h5>
                        <p>Total:</p>
                        <h4>$ {total}</h4>
                        <ReactWhatsapp number="57-313-474-6663" message={`¡Hola! Estoy interesad@ en adquirir este/os productos 😄: ${cart.map((product) =>
                            product.quantity + " Unid. " + product.name
                        )} con un total de $${total} pesos`} >CONTINUAR</ReactWhatsapp>
                        <p className='small-whatsapp-message'>*Serás redireccionad@ a WhatsApp para terminar tu compra</p>
                    </div>
                </section>
            </main>
            <div className='footer'><Footer/></div>
            <NavBarMobile/>
        </>
    )
}

export default Carrito
