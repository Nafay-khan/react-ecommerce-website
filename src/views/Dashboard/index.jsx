import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = ()=>{
    const [product, setProduct]= useState()
    const navigate = useNavigate()
    useEffect(()=>{
        axios('https://fakestoreapi.com/products')
        .then((res)=>{
            // console.log(res.data);
            setProduct(res.data)
        })
    },[])

    const gotodetail = (item)=>{
        navigate(`/detail/${item.id}`)
    }
    return (
        <>
        <div>
            <h1 className="text-center text-4xl">Dashboard</h1>
            <h1 className="text-center text-4xl mb-10">Product Page</h1>
            <div className="flex flex-wrap justify-center gap-5">
            {product ? 
                product.map((item)=>{
                    return <div key={item.id} className="cursor-pointer" onClick={()=>gotodetail(item)}><Link to={`detail/${item.id}`}><Card img={item.image} /></Link></div>
                })
            : <h1><span className="loading loading-ball loading-lg"></span></h1>}
            </div>
        </div>
        </>
    )
}

export default Dashboard

// title={item.title} description={item.description} price={item.price}