import './ProductCard.css'
import cremaParaPeinarRepasadora from '../nosotros/img-nosotros/cremaParaPeinarRepasadora.jpg'
import addBtn from '../nosotros/img-nosotros/addBtn.png'

function ProductCard() {
return (
<div className='product-card'>
    <div><h4 className='tittle-card'>nombre del producto as asdadasd a</h4></div>
    <div className='description-card'>
        <img src={cremaParaPeinarRepasadora} alt="" className='img-card'/>
        <p className='text-description-card'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate maiores cum nihil quod nesciunt? Hic eum vitae nemo pariatur libero, ab ex nostrum neque amet ut eaque id animi cum.</p>
    </div>
    <div className='price'>
        <div>
            <p>Categoría</p>
            <p>$ 00.000</p>
        </div>
        <div>
            <a href="">
                <img src={addBtn} alt="" className='add-car'/>
            </a>
        </div>
    </div>
</div>
)
}

export default ProductCard