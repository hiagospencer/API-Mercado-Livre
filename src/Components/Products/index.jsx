/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';

import api from '../../api/provider';

import useAppContext from '../../Hook/useAppContext';

import ProductCard from './ProductCard';

import { GridProducts } from './styles';


export default function index() {
  const {value} = useAppContext()

  const [products, setProducts] = useState([]);


  useEffect(()=>{
    fetchData(value)
  }, [value]);

  const fetchData = (query) => {
    api.get(`/search?q=${query}`).then((response) =>{
      setProducts(response.data.results)
    })
  }


  return (
    <GridProducts className='container'>
      {products.map((product) => <ProductCard key={product.id} data={product} />)}

    </GridProducts>
  )
}
