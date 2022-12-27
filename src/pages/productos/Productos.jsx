import './Productos.css'
import ProductCard from './ProductCard'
//Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NavBarMobile from '../../components/NavBarMobile'

function Productos() {
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
                <a href="">Todos</a>
                <a href="">Capilar</a>
                <a href="">Corporal</a>
            </div>
        </div>
        {/* PRODUCT CARDS */}
        <section className='section-cards'>
            <div className='cards-container'>
                <ProductCard/>
            </div>
        </section>
    </main>
    <Footer/>
    <NavBarMobile/>
    </>
)
}

export default Productos