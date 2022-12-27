import './Footer.css'
import TIKTOK from './img/TIKTOK.png'
import IG from './img/IG.png'
import FACE from './img/FACE.png'
import yerayGuacheta from './img/yerayGuacheta.png'

function Footer() {
return (
    <footer>
        <div>
            <a href=""><img src={TIKTOK} alt="TikTok" className='img-footer'/></a>
            <a href=""><img src={IG} alt="Instagram" className='img-footer'/></a>
            <a href=""><img src={FACE} alt="Facebook" className='img-footer'/></a>
        </div>
        <div className='container-2'>
            <p className='footer-text'>© <b>2022 Formula2Vie | Diseñado por Yeray Guachetá</b></p>
            <img src={yerayGuacheta} alt="Logo Yeray Guachetá"  className='img-footer-2'/>
        </div>
    </footer>
)}
export default Footer