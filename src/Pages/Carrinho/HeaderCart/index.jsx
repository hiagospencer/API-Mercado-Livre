import CartButton from '../../../Components/CartButton';

import { Container, Header, Logo } from './styles';


export default function index() {
  return (
    <Container>
        <Header className="container">
          <Logo><a href="/">HS</a></Logo>
          <CartButton />
        </Header>
    </Container>
  )
}
