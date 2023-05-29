import { AiOutlineShoppingCart } from 'react-icons/ai';

import { Button, Span } from './styles';

export default function index() {
  return (
    <Button href="/carrinho">
        <AiOutlineShoppingCart />
        <Span>1</Span>
    </Button>
  )
}
