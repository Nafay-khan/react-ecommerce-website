import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getProduct } from "../../config/firebase";

const Dashboard = ()=>{
    const [product, setProduct]= useState([])
    const navigate = useNavigate()
    useEffect( ()=>{
        // axios('https://fakestoreapi.com/products')
        // .then((res)=>{
        //     setProduct(res.data)
        // })
        const fetchProducts = async ()=>{
            const products = await getProduct()
            setProduct(products)
            console.log(products);
        }
        fetchProducts()
    },[])

    const gotodetail = (item)=>{
        navigate(`/detail/${item.id}`)
    }
    return (
        <>
        <div>
            <Navbar/>
            <h1 className="text-center text-4xl mb-10">Dashboard</h1>
            <div className="flex flex-wrap justify-center gap-5">
            {product ? 
                product.map((item)=>{
                    return <div 
                    key={item.id}
                    className="cursor-pointer" 
                    onClick={()=>gotodetail(item)}>
                        <Link to={`detail/${item.id}`}>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                            <img className='h-72'
                               src={item.image}
                               alt='img err' />
                            </figure>
                            <h1 className="text-center text-3xl mt-5 font-bold">{item.title}</h1>
                        </div>
                        </Link>
                    </div>
                })
            : <h1><span className="loading loading-ball loading-lg"></span></h1>}
            </div>
        </div>
        </>
    )
}

export default Dashboard