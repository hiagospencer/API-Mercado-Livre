/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import useAppContext from '../../../Hook/useAppContext';

import { BsTrash } from 'react-icons/bs';

import { setItem } from '../../../service/LocalStorageFuncs';
import { Button, Quantidade, Table } from './styles';

export default function index() {
  const { cart,setCart, setCartTotal } = useAppContext()


  const removeCart = (obj) => {
    const arrFilter = cart.filter((e) => e.id !== obj.id)

    setItem('carrinho', arrFilter)
    setCart(arrFilter)

  }

  const formatCurrency = (value) => {
    return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(value)
  }

  const getTotal = () => {

    let sum = 0;

    for ( let item of cart){
      sum += item.price * 1
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

              <td  colSpan='3'><p>{product.title}</p></td>

              <td onClick={() => removeCart(product)} >
                < BsTrash style={{ cursor: 'pointer'}} />
              </td>

              <td>{formatCurrency(product.price)}</td>
            </tr>
          ))
          }
        </tbody>
    </Table>
    </div>
  )
}
