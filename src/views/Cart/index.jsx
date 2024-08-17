import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartStore.cart || []);
  const navigate = useNavigate()

  const handleRemove = (index) => {
    dispatch(removeFromCart(index));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto bg-gray-500 h-screen">
      <div className='text-center'>
    <button onClick={goBack} className="btn btn-primary mt-5">Go Back</button>
    </div>
      <h1 className="text-center text-4xl mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div>
          <button onClick={handleClearCart} className="btn btn-primary mb-4">Clear Cart</button>
          <ul>
            {cart.map((product,index) => (
              <li key={index} className="flex justify-between items-center mb-4">
                <div>
                  <img src={product.image} alt={product.title} className="w-16 h-16 mr-4"/>
                  <span>{product.title} - ${product.price}</span>
                </div>
                <button onClick={() => handleRemove(index)} className="btn bg-red-600">Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;