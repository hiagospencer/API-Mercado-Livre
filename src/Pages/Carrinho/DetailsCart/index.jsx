/* eslint-disable react-hooks/rules-of-hooks */

import useAppContext from '../../../Hook/useAppContext';

import { BsTrash } from 'react-icons/bs';

import { setItem } from '../../../service/LocalStorageFuncs';
import { Button, Quantidade, Table } from './styles';

export default function index() {
  const { cart,setCart, quantity, setQuantity, setCartTotal } = useAppContext()


  const removeCart = (obj) => {
    const arrFilter = cart.filter((e) => e.id !== obj.id)

    setItem('carrinho', arrFilter)
    setCart(arrFilter)

  }

  const updateQuantityProduct = ( action) => {

    let newQuantity = 2


    if ( action === 'decrease'){
      if( newQuantity === 1) {
        return;
      }
      newQuantity -= 1
       setQuantity(newQuantity)
    }

    if ( action === 'increase' ){
      newQuantity += 1
       setQuantity(newQuantity)
    }

  }

  const getTotal = () => {

    let sum = 0;

    for ( let item of cart){
      sum += item.price * quantity
    }
    setCartTotal(sum)
    return sum;
  };

   getTotal();


  return (
    <div className="overflow">
    <Table>
        <thead>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>

        <tbody>

             {cart.length === 0 && (
                <tr>
                <td colSpan='5' style={{ textAlign: 'center' }}>
                  <b>Carrinho de compras vazio.</b>
                </td>
              </tr>
            )}
          {
          cart.map((product) => (
            <tr key={product.id}>
              <td><img src={product.thumbnail} alt='' width={60} /></td>

              <td  colSpan='2'><p>{product.title}</p></td>

              <td>
                  <Quantidade>
                      <Button
                        onClick={() => updateQuantityProduct( 'decrease')}>-</Button>
                        <span>{product.available_quantity}</span>

                      <Button
                      onClick={() => updateQuantityProduct('increase')}>+</Button>
                  </Quantidade>
              </td>

              <td onClick={() => removeCart(product)} >
                < BsTrash style={{ cursor: 'pointer'}} />
              </td>

              <td>R$ {product.price * quantity}</td>
            </tr>
          ))
          }
        </tbody>
    </Table>
    </div>
  )
}
