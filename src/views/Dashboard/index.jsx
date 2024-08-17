import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getProduct } from "../../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { settheme } from "../../store/themeSlice";

const Dashboard = ()=>{
    const [product, setProduct]= useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect( ()=>{
        // axios('https://fakestoreapi.com/products')
        // .then((res)=>{
        //     setProduct(res.data)
        // })
        const fetchProducts = async ()=>{
            const products = await getProduct()
            setProduct(products)
            // console.log(products);
        }
        fetchProducts()
    },[])

    const gotodetail = (item)=>{
        navigate(`/detail/${item.id}`)
    }

    const color = useSelector(state=>state.themeStore.color)
    // console.log(color);
    
    return (
        <>
        <div style={{backgroundColor : color}}>
            <Navbar/>
            <div className="flex justify-center text-2xl bg-gray-500 mb-10">
                <div className="text-center w-44">
                <button className="btn bg-green-500 text-white" onClick={()=>dispatch(settheme('lightgreen'))}>green</button>-
                <button className="btn bg-blue-200 text-white" onClick={()=>dispatch(settheme('lightblue'))}>blue</button>
                </div>
            </div> 
            <h1 className="text-center text-black text-4xl mb-10">Dashboard</h1>
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