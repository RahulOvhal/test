import React,{useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../../redux/action/productAction';

const ProductDetails = () => {
    const product = useSelector((state)=> state.product);

    const {image,title, price, description, category} = product;
    
    const {productId}  = useParams();

    const dispatch = useDispatch();

    console.log(productId);

    const fetchProductDetails = async() => {
    //     const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    //    .catch(err =>{
    //     console.log("Error",err);
    //    });

    //    dispatch(selectProduct(res.data));
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            dispatch(selectProduct(res.data));
        } catch (err) {
            console.log("Error", err);
        }
    }

    useEffect(()=>{
        if(productId && productId !== ""){
            fetchProductDetails();
        }
    },[productId])

    
  return (
    <div className='product-container'>
       {Object.keys(product).length === 0 ? (
        <div>..Loading </div>
       )
    :
    (
    <div className='product-container'>
        <div className='align greed'>
            <div className='vertical divider'>
                AND
            </div>
            <div className='middle-allign-row'>
                <div className='product-img'>
                <img src={image} className='p-img'/>
                </div>
                <div className='product-title'>
                    <h1>{title}</h1>
                    <h2>
                    <a className='price-tag'>${price}</a>
                    </h2>
                    <h3 className='product-category'>
                        {category}
                    </h3>
                    <p className='p-info'>
                        {description}
                    </p>
                    <a className='btn-add'>Add to Cart</a>        
                </div>
                
            </div>
        </div>
    </div>
    
    )
    }
      
    </div>
  )
}

export default ProductDetails
