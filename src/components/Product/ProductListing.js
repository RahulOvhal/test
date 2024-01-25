import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setProducts} from "../../redux/action/productAction";
import "./ProductListing.css";
import ProdcutComponent from './ProdcutComponent';
import axios from 'axios';

const ProductListing = () => {
    const products = useSelector((state)=> state);
    console.log(products)

    const dispatch = useDispatch();

    const fetchProducts = async()=>{
        const res = await axios.get("https://fakestoreapi.com/products")
        .catch((err)=>{       
            console.log("Error", err)
        });
            dispatch(setProducts(res.data));
    };

    useEffect(()=>{
        fetchProducts();
    },[]);
    console.log("Products", products)
    
  return (
    <>
        <h1>Product List</h1>
    <div className='product-listing'>
      <ProdcutComponent />
    </div>
    </>
  )
}

export default ProductListing
