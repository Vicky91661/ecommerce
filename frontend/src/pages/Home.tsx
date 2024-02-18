import ProductCard from '../components/ProductCard'
import header from "../assets/header.jpg"
import { Link } from 'react-router-dom'

function Home() {

    const addToCartHandler = ()=>{}
  return (
    <div>
        <div className=' mx-2 md:mx-10 font-poppins'>
            <div>
                <img className=' h-40 w-full md:h-96 bg-no-repeat' src={header} alt="header image" />
            </div>
            <div className='flex justify-between text-sm mt-2 md:text-lg'>
                <div><h1>Latest Product</h1></div>
                <div><Link to="/search">More</Link></div>
            </div>
        </div>
        <div className='flex overflow-hidden mx-10'>
            <div>
            <ProductCard productId='890' name='macbook'
            price={345} stock={50} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/81zf2BXNfmL._SL1500_.jpg'/>
            </div>
            <div>
            <ProductCard productId='890' name='macbook'
            price={345} stock={50} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/81zf2BXNfmL._SL1500_.jpg'/>
            </div>
            <div>
            <ProductCard productId='890' name='macbook'
            price={345} stock={50} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/81zf2BXNfmL._SL1500_.jpg'/>
            </div>
            <div>
            <ProductCard productId='890' name='macbook'
            price={345} stock={50} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/81zf2BXNfmL._SL1500_.jpg'/>
            </div>
            <div>
            <ProductCard productId='890' name='macbook'
            price={345} stock={50} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/81zf2BXNfmL._SL1500_.jpg'/>
            </div>
            <div>
            <ProductCard productId='890' name='macbook'
            price={345} stock={50} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/81zf2BXNfmL._SL1500_.jpg'/>
            </div>
            <div>
            <ProductCard productId='890' name='macbook'
            price={345} stock={50} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/81zf2BXNfmL._SL1500_.jpg'/>
            </div>
            <div>
            <ProductCard productId='890' name='macbook'
            price={345} stock={50} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/81zf2BXNfmL._SL1500_.jpg'/>
            </div>
            <div>
            <ProductCard productId='890' name='macbook'
            price={345} stock={50} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/81zf2BXNfmL._SL1500_.jpg'/>
            </div>
            <div>
            <ProductCard productId='890' name='macbook'
            price={345} stock={50} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/81zf2BXNfmL._SL1500_.jpg'/>
            </div>
            <div>
            <ProductCard productId='890' name='macbook'
            price={345} stock={50} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/81zf2BXNfmL._SL1500_.jpg'/>
            </div>

            <div>
            <ProductCard productId='890' name='macbook'
            price={345} stock={50} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/81zf2BXNfmL._SL1500_.jpg'/>
            </div>
            <div>
            <ProductCard productId='890' name='macbook'
            price={345} stock={50} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/81zf2BXNfmL._SL1500_.jpg'/>
            </div>
            
        
        </div>
    </div>
    
  )
}

export default Home