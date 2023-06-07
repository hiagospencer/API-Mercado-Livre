import CartButton from '../../../Components/CartButton';

import { Container, Header, Logo } from './styles';


export default function index() {
  return (
    <Container>
        <Header className="container">
          <Logo><a href="/API-Mercado-Livre">HS</a></Logo>
          <CartButton />
        </Header>
    </Container>
  )
}
