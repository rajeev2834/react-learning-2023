import React, {useState, useEffect} from 'react'

interface Props{
    product: string
}

const ProductList = ({product}: Props) => {

    useEffect(() => {
        console.log('fetching products -> ' + product);
        
    }, [product]);

  return (
    <div>ProductList</div>
  )
}

export default ProductList;