//Styles
import './Inicio.css'
//import images
import carousel1 from './imgInicio/carousel1.jpg'
import carousel2 from './imgInicio/carousel2.jpg'
import carousel3 from './imgInicio/carousel3.jpg'
import logoFormula2VieByAngiesWht from './imgInicio/logoFormula2VieByAngiesWht.png'
import logoFormulaWht from './imgInicio/logoFormulaWht.png'
import logoLabFormula2VieWht from './imgInicio/logoLabFormula2VieWht.png'
//Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NavBarMobile from '../../components/NavBarMobile'
//Import link navegation router
import { Link } from 'react-router-dom'

//Inicio function / Component
function Inicio() {
return (
    <>
    {/* Header component */}
    <Header/>
    <main className="main">
        {/* CAROUSEL */}
        <section id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="hover-carousel">
                        <img src={logoFormula2VieByAngiesWht} alt="LogoFormula2Vie" className="img-logo-carousel" />
                    </div>
                    <img src={carousel1} className="d-block w-100" alt="Imagen del carrusel" />
                </div>
                <div className="carousel-item">
                    <div className="hover-carousel">
                        <img src={logoFormulaWht} alt="LogoFormula2Vie" className="img-logo-carousel" />
                    </div>
                    <img src={carousel2} className="d-block w-100" alt="Imagen del carrusel" />
                </div>
                <div className="carousel-item">
                    <div className="hover-carousel">
                        <img src={logoLabFormula2VieWht} alt="LogoFormula2Vie" className="img-logo-carousel" />
                    </div>
                    <img src={carousel3} className="d-block w-100" alt="Imagen del carrusel" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </section>
        {/* BUTTON "VER CATÁLOGO" */}
        <div className="bknd-button-catalogue">
            {/* Link that redirects to the products component */}
            <Link to='/productos'>
                <button className="button-catalogue">VER CATÁLOGO</button>
            </Link>
        </div>
        {/* MAIN DESCRIPTION */}
        <section  className="main-description">
            <h1 className="title-description">Formula2Vie</h1>
            <div className="desctription-cont">
                <p className="text-description">Nuestra empresa de productos cosméticos se dedica a la creación y venta de una amplia gama de productos de belleza y cuidado personal de alta calidad. Nuestro objetivo es proporcionar a nuestros clientes productos innovadores y efectivos que mejoren su apariencia y bienestar. Contamos con un equipo de expertos en el campo de la cosmética que trabajan constantemente en el desarrollo de nuevos productos y en mejorar los ya existentes. Todo esto al alcance de tu bolsillo y a la venta con precios de fábrica.</p>
                <div className="img-description"></div>
            </div>
        </section>
        {/* TYPE OF PRODUCTS */}
        <section class="parent">
            <div class="div1"><h1>Tipos de productos</h1></div>
            <div class="div2">
                <div className='img-grid1'>
                    <h3 className='grid-img-text'>Capilar</h3>
                </div>
                <div className='img-grid2'>
                <h3 className='grid-img-text'>Corporal</h3>
                </div>
                <div className='img-grid3'>
                <h3 className='grid-img-text'>Facial</h3>
                </div>
            </div>
            <div class="div3"><p>Ofrecemos tres categorías principales de productos: productos capilares, productos corporales y productos faciales. Todos nuestros productos están hechos con ingredientes de alta calidad y naturales y son el resultado de años de investigación y desarrollo por parte de nuestro equipo Formula2Vie para que nuestros clientes cuenten con los mejores resultados gracias a nuestros productos de primera línea.</p></div>
        </section>
            <div className='button-products'>
                {/* Link that redirects to the products component */}
                <Link to='/productos'>
                    <button className='button-catalogue'>PRODUCTOS</button>
                </Link>
            </div>
        {/* ADVANTAGE */}
        <section className='advantages'>
            <h1 className='advantages-tittle'>¡Ventajas al Preferirnos!</h1>
            <div className='advantages-ul-cont'>
                <ul className='advantages-ul'>
                    <li>Ofrecemos una amplia gama de productos de alta calidad y efectivos para satisfacer todas las necesidades de belleza y cuidado personal de nuestros clientes.</li>
                    <li>Utilizamos ingredientes de alta calidad y naturales en nuestros productos.</li>
                </ul>
                <ul className='advantages-ul'>
                    <li>Ofrecemos atención al cliente excepcional y estamos siempre dispuestos a ayudar a nuestros clientes a encontrar los productos adecuados para sus necesidades.</li>
                    <li>Trabajamos con una red de distribuidores y minoristas de confianza para asegurarnos de que nuestros productos estén disponibles para todos nuestros clientes.</li>
                </ul>
            </div>
        </section>
    </main>
    {/* Footer component */}
    <Footer/>
    {/* NavBarMobile component */}
    <NavBarMobile/>
    </>
)
}
//Export Inicio by default
export default Inicio