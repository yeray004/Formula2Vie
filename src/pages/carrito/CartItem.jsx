//Styles
import './Carrito.css'
import test from '../nosotros/img-nosotros/cremaParaPeinarRepasadora.jpg'
//import from react
import React from 'react'

function CartItem({item}) {
//desctructure item
const {id, name, image, price, amount, category} = item;
return (
    <>
        <section className='container-carrito'>
            <div className='p-car-container'>
                {/* Image */}
                <img src={test} alt="" className='img-card-car'/>
                <div className='flex-container'>
                    <p>{item.name}</p>
                    <div className='flex-sub-cont'>
                        <div>
                            <p>{item.category}</p>
                            <p>{item.price}</p>
                        </div>
                        <div>
                            <img src="" alt="reduce" />
                            <div>
                                <p>{`$ {cantidad}`}</p>
                            </div>
                            <img src="" alt="add more" />
                        </div>
                    </div>
                </div>
                <button className='delete-product'>X</button>
            </div>
        </section>
    </>
)
}

export default CartItem