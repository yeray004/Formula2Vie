import './NavBarMobile.css'
import home from './img/home.png'
import people from './img/people.png'
import bottle from './img/bottle.png'
import shoppingCar from './img/shoppingCar.png'

function NavBarMobile() {
    return (
        <nav className='nav-mobile'>
            <ul  className='ul-nav'>
                <li className='li-nav'>
                    <a href="" className='center-img-p'>
                        <img src={home} alt="" className='nav-img'/>
                        <p className='nav-text'>Inicio</p>
                    </a>
                </li>
                <li className='li-nav'>
                    <a href="" className='center-img-p'>
                        <img src={people} alt="" className='nav-img'/>
                        <p className='nav-text'>Nosotros</p>
                    </a>
                </li>
                <li className='li-nav'>
                    <a href="" className='center-img-p'>
                        <img src={bottle} alt="" className='nav-img'/>
                        <p className='nav-text'>Productos</p>
                    </a>
                </li>
                <li  className='li-nav'>
                    <a href="" className='center-img-p'>
                        <img src={shoppingCar} alt="" className='nav-img'/>
                        <p className='nav-text'>Carrito</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
export default NavBarMobile