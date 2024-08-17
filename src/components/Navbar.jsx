import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, onAuthStateChanged, signOut } from '../config/firebase';
import { useSelector } from 'react-redux';
import cartIcon from '../assets/cartIcon.png'

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const cart = useSelector(state => state.cartStore.cart || []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const logoutUser = async () => {
    try {
      await signOut(auth);
      alert('User successfully logged out');
      navigate('/');
      window.location.reload()
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="navbar bg-black text-gray-500">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl mb-2">
          <img className='w-16' src="https://png.pngtree.com/png-clipart/20220213/original/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_7265997.png" alt="" srcset="" />
        </a>
      </div>
      <div className="flex-none">
        <img className='w-5' src="https://www.iconpacks.net/icons/2/free-user-icon-4254-thumb.png" alt="" />-{user ? user.email.split('@')[0] : 'Guest'}
        <ul className="menu menu-horizontal px-1">
          <li>
            <button onClick={() => navigate('/cart')}>
              <img
                className='h-6 pl-3'
                src={cartIcon}
                alt="cart-icon"
              />
              {cart.length}
            </button>
          </li>
          <li><button onClick={() => navigate('/addpost')}>Add Product</button></li>
          <li><button onClick={()=> navigate('/login')}>Login</button></li>
          <li><button onClick={logoutUser}>Logout</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;