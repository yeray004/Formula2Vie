import './Productos.css'
import './ProductCard.css'
//import Json
import products from '../../products.json'
//Product Component
/* import ProductCard from './ProductCard' */
//import image addButton
import addBtn from '../nosotros/img-nosotros/addBtn.png'
//Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NavBarMobile from '../../components/NavBarMobile'
import { useState } from 'react'
//import useSelector and useDispatch from redux
import { useSelector, useDispatch } from 'react-redux'



function Productos() {
    //Filter function
    const [data, setData] = useState(products);
    const filterResult = (typeOfCategory) => {
        const result = products.filter(
            (curDate) => {
                return curDate.category === typeOfCategory
            }
        );
        setData(result)
        console.log(result)
        console.log(data)
    }
    //Reduce
    const cart = useSelector((state) => state)
    //console.log(cart)
    const dispatch = useDispatch()
    return (
        <>
            <Header />
            <main className="main">
                {/* CATALOGUE */}
                <div className='catalogue'>
                    <div>
                        <h1>Catálogo</h1>
                    </div>
                    <div className='category'>
                        <button onClick={_ => setData(products)}>Todos</button>
                        <button onClick={_ => filterResult('Capilar')}>Capilar</button>
                        <button onClick={_ => filterResult('Corporal')}>Corporal</button>
                    </div>
                </div>
                {/* PRODUCT CARDS */}
                <section className='section-cards'>
                    <div className='cards-container'>
                        {data.map((product) => {
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
            <Footer />
            <NavBarMobile />
        </>
    )
}

export default Productos