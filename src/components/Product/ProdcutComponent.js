import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./ProdcutComponent.css"

const ProdcutComponent = () => {
    const products = useSelector((state)=> state.allProducts.products);

    const rederList = products.map(product => {
        const {id, title,price,category,image} = product;
        return(
            
            <div className='product-list' key={id}>
                
                <Link to={`/product/${id}`}>
                <div className='link-cards'>
                    <div className='card'>

                        <div className='image'>
                            <img src={image} alt={title}/>
                        </div>
                        <div className='content'>
                            <div className='header' >
                                {title}
                            </div>
                            <div className='price' >
                                $ {price}
                            </div>
                            <div className='category' >
                                {category}
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
            
        )
    })

  return (
        <>
            {rederList}
        </>
  )
}

export default ProdcutComponent
