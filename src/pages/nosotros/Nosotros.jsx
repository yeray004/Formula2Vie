import './Nosotros.css'
import logoFormula2VieWht from './img-nosotros/logoFormula2VieWht.png'
//Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NavBarMobile from '../../components/NavBarMobile'

function Nosotros() {
return (
    <>
    <Header/>
    <main className="main">
        {/* QUIÉNES SOMOS */}
        <div className="img-quienes-somos">
            <h1>¿Quiénes Somos?</h1>
        </div>
        {/* OUR HISTORY */}
        <section className='our-history'>
        <div className='img-our-history'>
            <img src={logoFormula2VieWht} alt="" className='logo-our-history'/>
        </div>
        <div className='text-our-history'>
            <h1>Nuestra historia</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </section>
        {/* MISION & VISION */}
        <section className='myv'>
        <div className='myv-card1'>
            <div className='myv-card-text'>
                <h1>Misión</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div className='myv-card2'>
            <div className='myv-card-text'>
                <h1>Misión</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        </section>
        <section>
            <iframe width="320" height="440" src="https://instagram.com/labformula2vie?igshid=OGQ2MjdiOTE=" frameborder="0"></iframe>
        </section>
    </main>
    <Footer/>
    <NavBarMobile/>
    </>
)
}

export default Nosotros