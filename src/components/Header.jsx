import './Header.css'
import logoFormula2Vie from './img/logoFormula2Vie.png'
import shoppingCar from './img/shoppingCar.png'

//Import link routes
import { Link } from 'react-router-dom'

function Header() {
return (
    <header>
        <div className='header-container'>
            <div className='routes'>
                <ul className='ul-header'>
                    <li className='li-header'><Link to='/'>INICIO</Link></li>
                    <li className='li-header'><Link to='/nosotros'>NOSOTROS</Link></li>
                    <li className='li-header'><Link to='/productos'>PRODUCTOS</Link></li>
                </ul>
            </div>
            <img src={logoFormula2Vie} alt="LogoFormula2Vie" className="img-header1" />
            <div><Link to='/carrito'><img src={shoppingCar} alt="Carrito" className="img-header2" /></Link></div>
        </div>
    </header>
)}
export default Header