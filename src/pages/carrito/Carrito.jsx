import './Carrito.css'
import test from '../nosotros/img-nosotros/cremaParaPeinarRepasadora.jpg'
//Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NavBarMobile from '../../components/NavBarMobile'

function Carrito() {
return (
    <>
    <Header/>
    <main className="main main-car">
        <section className='container-carrito'>
            <div className='p-car-container'>
                <img src={test} alt="" className='img-card-car'/>
                <div className='flex-container'>
                    <p>{`Nombre del producto asdadad $ {}`}</p>
                    <div className='flex-sub-cont'>
                        <div>
                            <p>{`Categoría $ {}`}</p>
                            <p>{`Price $ {}`}</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <p>{`$ {cantidad}`}</p>
                            </div>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <button className='delete-product'>X</button>
            </div>
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
    <Footer/>
    <NavBarMobile/>
    </>
)
}

export default Carrito