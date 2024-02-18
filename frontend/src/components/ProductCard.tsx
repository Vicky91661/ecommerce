
type ProductProps = {
    productId :string,
    photo:string,
    name:string,
    price:number,
    stock:number,
    handler:()=>void;
}

const server:string = "anyThing"

function ProductCard({productId,photo,name,price,stock,handler}:ProductProps) {
    const s =stock;
    const p =productId;
  return (
    <div className=' w-56 h-96 cursor-pointer'>
      
        <img className=' w-56 ' src={photo} alt={name} />
        <p className='text-sm text-center'>{name}</p>
        <p className='text-sm text-center'>{price}</p>
        
        <div className='
        text-sm text-center
        rounded-sm
        bg-green-900'>
            <button className='' onClick={()=>handler()}>
                Add
            </button>
        </div>
    </div>
  )
}

export default ProductCard