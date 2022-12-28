import './Inicio.css'
import carousel1 from './imgInicio/carousel1.jpg'
import carousel2 from './imgInicio/carousel2.jpg'
import logoFormula2VieByAngiesWht from './imgInicio/logoFormula2VieByAngiesWht.png'
import logoFormulaWht from './imgInicio/logoFormulaWht.png'
import logoLabFormula2VieWht from './imgInicio/logoLabFormula2VieWht.png'
//Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NavBarMobile from '../../components/NavBarMobile'
//Import link navegation router
import { Link } from 'react-router-dom'


function Inicio() {
return (
    <>
    <Header/>
    <main className="main">
        {/* CAROUSEL */}
        <section id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="hover-carousel">
                        <img src={logoFormula2VieByAngiesWht} alt="" className="img-logo-carousel" />
                    </div>
                    <img src={carousel1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <div className="hover-carousel">
                        <img src={logoFormulaWht} className="img-logo-carousel" alt="LogoFormula2Vie"/>
                    </div>
                    <img src={carousel2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <div className="hover-carousel">
                        <img src={logoLabFormula2VieWht} alt="" className="img-logo-carousel" />
                    </div>
                    <img src={carousel1} className="d-block w-100" alt="..." />
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
            <Link to='/productos'>
                <button className="button-catalogue">VER CATÁLOGO</button>
            </Link>
        </div>
        {/* MAIN DESCRIPTION */}
        <section  className="main-description">
            <h1 className="title-description">Descripción Principal</h1>
            <div className="desctription-cont">
                <p className="text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
            <div class="div3"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        </section>
            <div className='button-products'>
                <Link to='/productos'>
                    <button className='button-catalogue'>PRODUCTOS</button>
                </Link>
            </div>
        {/* ADVANTAGE */}
        <section className='advantages'>
            <h1 className='advantages-tittle'>Ventajas</h1>
            <div className='advantages-ul-cont'>
                <ul className='advantages-ul'>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, ut!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, ut!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, ut!</li>
                </ul>
                <ul className='advantages-ul'>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, ut!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, ut!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, ut!</li>
                </ul>
            </div>
        </section>
    </main>
    <Footer/>
    <NavBarMobile/>
    </>
)
}

export default Inicio