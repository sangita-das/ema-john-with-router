import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb (key);
    }
    return (
        <div className="shop-container">

        <div className="shop-container">
        {
            cart.map(product=> <ReviewItem
            key={product.key}
            product={product}
            handleRemove = {handleRemove}
            >

            </ReviewItem>)
        }

        </div>

        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>

        
       {/*  <h2>{products.length}</h2>
        <h3>{cart.length}</h3>
            <h2>This is Order Review</h2>
            <Cart cart={cart}></Cart> */}
        </div>
    );
};

export default OrderReview;