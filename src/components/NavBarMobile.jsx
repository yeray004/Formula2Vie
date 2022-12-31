//Styles
import './NavBarMobile.css'
//import images
import home from './img/home.png'
import people from './img/people.png'
import bottle from './img/bottle.png'
import shoppingCar from './img/shoppingCar.png'

//Import link routes
import { Link } from 'react-router-dom'

//NavBarMobile function / Component
function NavBarMobile() {
    return (
        <nav className='nav-mobile'>
            <ul className='ul-nav'>
                <li className='li-nav'>
                    {/* We use the Link to navigate per pages view */}
                    <Link to='/' className='center-img-p'>
                        <img src={home} alt="" className='nav-img' />
                        <p className='nav-text'>Inicio</p>
                    </Link>
                </li>
                <li className='li-nav'>
                    <Link to='/nosotros' className='center-img-p'>
                        <img src={people} alt="" className='nav-img' />
                        <p className='nav-text'>Nosotros</p>
                    </Link>
                </li>
                <li className='li-nav'>
                    <Link to='/productos' className='center-img-p'>
                        <img src={bottle} alt="" className='nav-img' />
                        <p className='nav-text'>Productos</p>
                    </Link>
                </li>
                <li className='li-nav'>
                    <Link to='/carrito' className='center-img-p'>
                        <img src={shoppingCar} alt="" className='nav-img' />
                        <p className='nav-text'>Carrito</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
//Export header by default
export default NavBarMobile