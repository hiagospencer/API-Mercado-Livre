/* eslint-disable react-hooks/rules-of-hooks */
import { AiOutlineShoppingCart } from 'react-icons/ai';

import useAppContext from '../../Hook/useAppContext';

import { Button, Span } from './styles';

export default function index() {

  const {cart} = useAppContext()

  const totalItensCart = cart.length
  return (
    <Button href="API-Mercado-Livre/carrinho">
        <AiOutlineShoppingCart />
        <Span>{totalItensCart}</Span>
    </Button>
  )
}
