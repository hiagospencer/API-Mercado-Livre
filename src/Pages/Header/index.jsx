import CartButton from '../../Components/CartButton';
import SearchBar from '../../Components/SearchBar';


import { Container, Header, Logo } from './styles';


export default function index() {
  return (
    <Container>
        <Header className="container">
          <Logo><a href="/">HS</a></Logo>
          <SearchBar />
          <CartButton />
        </Header>
    </Container>
  )
}
