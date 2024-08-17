import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleProduct } from '../../config/firebase';
import Navbar from '../../components/Navbar';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const Detail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const productDetail = await getSingleProduct(productId);
      setProduct(productDetail);
    };
    fetchSingleProduct();
  }, [productId]);

  const goBack = () => {
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-gray-500">
        <h1 className="text-center text-black text-4xl mb-3">Product Detail</h1>
        {product ? (
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
              <img src={product.image} alt="" />
              <h1 className="text-3xl font-bold mt-5 mb-2">{product.title}</h1>
              <p className="text-gray-600 mb-4">${product.price}</p>
              <p className="text-gray-800">{product.description}</p>
            </div>
            <div className="text-center">
              <button onClick={() => dispatch(addToCart(product))} className="btn btn-primary mb-4">Add to Cart</button>
            </div>
          </div>
        ) : (
          <h1 className="text-center"><span className="loading loading-ball loading-lg"></span></h1>
        )}
        <div className="card-actions justify-center">
          <button onClick={goBack} className="btn btn-primary mt-3">Go Back</button>
        </div>
      </div>
    </>
  );
};

export default Detail;