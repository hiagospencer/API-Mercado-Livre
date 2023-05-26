import { useState, useEffect } from 'react';

import fetchProducts from '../../api/fetchProducts';
import ProductCard from './ProductCard';

import { GridProducts } from './styles';


export default function index() {
  const [products, setProducts] = useState([]);


  useEffect(()=>{
      fetchProducts("tv tcl").then((response)=>{
        setProducts(response)
      });
  }, []);

  return (
    <GridProducts className='container'>
      {products.map((product) => <ProductCard key={product.id} data={product} />)}
    </GridProducts>
  )
}
