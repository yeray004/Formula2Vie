//Styles
import './ProductCard.css'
//img addItem
import addBtn from '../nosotros/img-nosotros/addBtn.png'



function ProductCard(props) {
return (
<div className='product-card' key={props.id}>
    <div><h4 className='tittle-card'>{props.name}</h4></div>
    <div className='description-card'>
        <div className='img-card'>
        <img src={props.image} alt="Imagen del producto" className='img-card'/>
        </div>
        <p className='text-description-card'>{props.description}</p>
    </div>
    <div className='price'>
        <div>
            <p>{props.category}</p>
            <p>$ {props.price}</p>
        </div>
        <div>
            <button>
                <img src={addBtn} alt="" className='add-car'/>
            </button>
        </div>
    </div>
</div>
)
}

export default ProductCard