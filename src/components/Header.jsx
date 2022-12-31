//import components
import './Header.css'
import logoFormula2Vie from './img/logoFormula2Vie.png'
import shoppingCar from './img/shoppingCar.png'

//Import link routes from react router dom
import { Link } from 'react-router-dom'

//Header function / Component
function Header() {
return (
    <header>
        <div className='header-container'>
            <div className='routes'>
                <ul className='ul-header'>
                    {/* We use the Link to navigate per pages view */}
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
//Export header by default
export default Header