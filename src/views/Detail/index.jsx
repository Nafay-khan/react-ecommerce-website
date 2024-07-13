import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [productId]);

    const goBack = () => {
        navigate(-2);
    };

    return (
        <>
            <div className="container mx-auto mt-8">
                    <h1 className="text-center text-4xl">Product Detail</h1>
                <div className="card-actions justify-center">
                <button onClick={goBack} className="btn btn-primary mb-4">Go Back</button>
                </div>
                {product ? (
                    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="p-4">
                            <img src={product.image} alt=""/>
                            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                            <p className="text-gray-600 mb-4">${product.price}</p>
                            <p className="text-gray-800">{product.description}</p>
                        </div>
                    </div>
                ) : (
                    <h1 className="text-center"><span className="loading loading-ball loading-lg"></span></h1>
                )}
            </div>
        </>
    );
};

export default Detail;
