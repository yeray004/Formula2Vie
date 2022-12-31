//Styles
import './Productos.css'
import './ProductCard.css'
//import Json
import products from '../../products.json'
//import image addButton
import addBtn from '../nosotros/img-nosotros/addBtn.png'
//Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NavBarMobile from '../../components/NavBarMobile'
//import react useState
import { useState } from 'react'
//import useSelector and useDispatch from redux
import { useDispatch } from 'react-redux'


//Productos function / Component
function Productos() {
    //Filter function
    //we use product as a parameter inside the useState
    const [data, setData] = useState(products);
    //create a function that filter the products by the category (a property of each item)
    const filterResult = (typeOfCategory) => {
        const result = products.filter(
            //the curdate take the parameter products
            (curDate) => {
                //items in that category
                return curDate.category === typeOfCategory
            }
        );
        //All products
        setData(result)
    }
    //To use the onClick with the add type used in Reducer.js for Carrito.jsx component
    const dispatch = useDispatch()
    return (
        <>
            {/* Header component */}
            <Header />
            <main className="main">
                {/* CATALOGUE */}
                <div className='catalogue'>
                    <div>
                        <h1>Catálogo</h1>
                    </div>
                    <div className='category'>
                        {/* through an onClick filter event we will make the products by their category */}
                        <button onClick={_ => setData(products)}>Todos</button> {/* All products */}
                        <button onClick={_ => filterResult('Capilar')}>Capilar</button> {/* Capilar category */}
                        <button onClick={_ => filterResult('Corporal')}>Corporal</button> {/* Corporal category */}
                    </div>
                </div>
                {/* PRODUCT CARDS */}
                <section className='section-cards'>
                    <div className='cards-container'>
                        {/* maps all the products that the data.map share depends of the event that the user select */}
                        {data.map((product) => {
                            //set the base quantity for each card product
                            product.quantity = 1;
                            return (
                                <div className='product-card' key={product.id}>
                                    <div><h4 className='tittle-card'>{product.name}</h4></div>
                                    <div className='description-card'>
                                        <div className='img-card'>
                                            <img src={product.image} alt="Imagen del producto" className='img-card' />
                                        </div>
                                        <p className='text-description-card'>{product.description}</p>
                                    </div>
                                    <div className='price'>
                                        <div>
                                            <p>{product.category}</p>
                                            <p>$ {product.price}</p>
                                        </div>
                                        <div>
                                            {/* Event related to file Reducer.js (first case) */}
                                            <button onClick={() => dispatch({ type: 'ADD', payload: product })}>
                                                <img src={addBtn} alt="" className='add-car' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <div className='cover-footer'></div>
            </main>
            {/* Footer component */}
            <Footer />
            {/* NavBarMobile component */}
            <NavBarMobile />
        </>
    )
}
//Export Products by default
export default Productos