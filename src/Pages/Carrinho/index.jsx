import  HeaderCart  from "./HeaderCart";

import DetailsCart from './DetailsCart';
import ResumoCompra from './ResumoCompra';

import { Container,InfoCart, CartDescription, Summary, Product, Title, Frete } from "./styles";

export default function index() {
  return (
    <div style={{ background: '#ededed'}}>
      <HeaderCart />
      <Container>
        <InfoCart>
          <CartDescription>
            <Product>
              <Title>Produtos</Title>
            </Product>
            <DetailsCart />
            <Frete>
              <span>Frete</span>
              <span><b>Gr</b>átis</span>
            </Frete>
          </CartDescription>


          <Summary>
            <ResumoCompra />
          </Summary>
        </InfoCart>
      </Container>
    </div>
  )
}
