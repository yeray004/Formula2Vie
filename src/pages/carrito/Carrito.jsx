import './Carrito.css'
//Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NavBarMobile from '../../components/NavBarMobile'
//import from react
import React from 'react'
//import useSelector and useDispatch from redux
import { useSelector, useDispatch } from 'react-redux'

function Carrito() {
    //Reduce
    const cart = useSelector((state) => state)
    console.log(cart)
    const dispatch = useDispatch()
    return (
        <>
            <Header />
            <main className="main main-car">
                <section className='container-carrito'>
                {cart.map((product) =>
                    <div className='p-car-container' key={product.id}>
                        <img src={product.image} alt="" className='img-card-car' />
                        <div className='flex-container'>
                            <p>{product.name}</p>
                            <div className='flex-sub-cont'>
                                <div>
                                    <p>{product.category}</p>
                                    <p>{`$ ${product.price}`}</p>
                                </div>
                                <div className='cont-buttons'>
                                    <button className='btn-add-sub'>-</button>
                                    <div>
                                        <p>{`$ {cantidad}`}</p>
                                    </div>
                                    <button className='btn-add-sub'>+</button>
                                </div>
                            </div>
                        </div>
                        <button className='delete-product'>X</button>
                    </div>)}
                </section>
                <section className='section-car-total'>
                    <div className='car-total'>
                        <h5>{`Productos en el carrito: $ {#}`}</h5>
                        <p>Total:</p>
                        <h4>{`$  $ {000.000}`}</h4>
                        <a href="">CONTINUAR</a>
                    </div>
                </section>
            </main>
            <Footer />
            <NavBarMobile />
        </>
    )
}

export default Carrito