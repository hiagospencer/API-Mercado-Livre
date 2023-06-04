/* eslint-disable react-hooks/rules-of-hooks */

import propTypes from 'prop-types';

import { BsFillCartPlusFill, BsTrash } from 'react-icons/bs';

import { setItem } from '../../../service/LocalStorageFuncs'

import formatCurrency from '../../../utils/formatCurrency';

import useAppContext from '../../../Hook/useAppContext';

import { ButtonCart, CardInfo, CardPrice, CardTitle, Container, Img } from './styles';

export default function index({data }) {
  const { cart, setCart} = useAppContext()


    const {price, title, thumbnail} = data;


    const addCart = (obj) => {
      const element = cart.find((e) => e.id === obj.id)


      if(element){
        const arrFilter = cart.filter((e) => e.id !== obj.id)

        setCart(arrFilter)
        setItem('carrinho', arrFilter)

      } else{
         setCart([...cart, obj])
         setItem('carrinho', [...cart, obj])
      }

    }

    return (
      <Container>
        <Img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="notebook"/>
        <CardInfo>
          <CardPrice>{formatCurrency(price)}</CardPrice>
          <CardTitle>{title}</CardTitle>
        </CardInfo>

        {
          cart.some((itemCart) => itemCart.id === data.id) ? (
            <ButtonCart onClick={() => addCart(data)}>
              <BsTrash />
            </ButtonCart>
          ) : (
            <ButtonCart onClick={() => addCart(data)}>
              <BsFillCartPlusFill />
            </ButtonCart>
          )
        }

      </Container>
    )
  }

 index.propTypes = {
  data: propTypes.shape({}),
 }.isRequired;
