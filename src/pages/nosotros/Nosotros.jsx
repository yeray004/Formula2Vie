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
            <p>Nuestra empresa de cosmética comenzó como un pequeño negocio familiar hace más de 4 años. Desde entonces, hemos crecido y evolucionado mucho, pero seguimos siendo una empresa familiar en nuestro corazón. Nuestros inicios se remontan a la pasión de nuestros fundadores por la belleza y el cuidado personal, y por su deseo de compartir sus conocimientos y productos con el mundo. Desde entonces, hemos trabajado constantemente en el desarrollo de nuestra línea de productos y en mejorar nuestros procesos de producción y distribución.</p>
        </div>
        </section>
        {/* MISION & VISION */}
        <section className='myv'>
        <div className='myv-card1'>
            <div className='myv-card-text'>
                <h1>Misión</h1>
                <p>Proporcionar a nuestros clientes productos de belleza y cuidado personal de alta calidad y efectivos que mejoren su apariencia y bienestar.</p>
            </div>
        </div>
        <div className='myv-card2'>
            <div className='myv-card-text'>
                <h1>Visión</h1>
                <p>Ser reconocidos a nivel nacional como una empresa de cosmética líder en el mercado, ofreciendo productos innovadores y efectivos que satisfagan las necesidades de nuestros clientes.</p>
            </div>
        </div>
        </section>
        <section className='social-media'>
            <h1>Nuestras Redes</h1>
            <h3>Instagram</h3>
            <div
                loading="lazy"
                data-mc-src="dd051b0a-45b4-4d63-865e-ae460f5fa01a#instagram">
            </div>
            <h3>TikTok</h3>
            <div>
                <iframe src='https://widgets.sociablekit.com/tiktok-feed/iframe/107848' frameborder='0' width='290' height='300' title='TikTok'></iframe>
            </div>
        </section>
        <div className='cover-footer'></div>
    </main>
    <Footer/>
    <NavBarMobile/>
    </>
)
}

export default Nosotros