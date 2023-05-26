import CartButton from '../../Components/CartButton';
import SearchBar from '../../Components/SearchBar';

import { Container, Header } from './styles';


export default function index() {
  return (
    <Container>
        <Header className="container">
          <SearchBar />
          <CartButton />
        </Header>
    </Container>
  )
}
