import CartButton from '../../Components/CartButton';
import SearchBar from '../../Components/SearchBar';
import { Link } from 'react-router-dom'

import { Container, Header, Logo } from './styles';


export default function index() {
  return (
    <Container>
        <Header className="container">
          <Logo><Link to="/API-Mercado-Livre">HS</Link></Logo>
          <SearchBar />
          <CartButton />
        </Header>
    </Container>
  )
}
