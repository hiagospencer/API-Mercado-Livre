

import { BsFillCartPlusFill } from 'react-icons/bs';
import propTypes from 'prop-types';

import formatCurrency from '../../../utils/formatCurrency';

import { Container, Img, CardInfo, CardPrice, CardTitle, ButtonCart  } from './styles';

export default function index({data}) {
    const {price, title, thumbnail} = data;

    return (
      <Container>
        <Img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="notebook"/>
        <CardInfo>
          <CardPrice>{formatCurrency(price, 'BRL')}</CardPrice>
          <CardTitle>{title}</CardTitle>
        </CardInfo>
        <ButtonCart>
          <BsFillCartPlusFill />
        </ButtonCart>
      </Container>
    )
  }

 index.propTypes = {
  data: propTypes.shape({}),
 }.isRequired;
