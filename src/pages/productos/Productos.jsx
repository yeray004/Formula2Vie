import './Productos.css'

//import Json
import products from '../../products.json'
//Product Component
import ProductCard from './ProductCard'
//Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NavBarMobile from '../../components/NavBarMobile'
import { useState } from 'react'

function Productos() {

    const[data, setData] = useState(products);

    const filterResult = (catItem)=>{
        const result = products.filter((curDate)=>{
            return curDate.Productos === catItem;
        });
        setData(result)
    }

return (
    <>
    <Header/>
    <main className="main">
        {/* CATALOGUE */}
        <div className='catalogue'>
            <div>
                <h1>Catálogo</h1>
            </div>
            <div className='category'>
                <button onClick={_=> setData(products)}>Todos</button>
                <button onClick={_=> filterResult('Capilar')}>Capilar</button>
                <button onClick={_=> filterResult('Corporal')}>Corporal</button>
            </div>
        </div>
        {/* PRODUCT CARDS */}
        <section className='section-cards'>
            <div className='cards-container'>
                {data.map( product =>
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        category={product.category}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                    />
                )}
            </div>
        </section>
    </main>
    <Footer/>
    <NavBarMobile/>
    </>
)
}

export default Productos