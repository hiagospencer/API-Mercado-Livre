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
      const copyCart = [...cart]
      const element = cart.find((e) => e.id === obj.id)

      if(element){
        const arrFilter = cart.filter((e) => e.id !== obj.id)
        arrFilter["quantity"] = 1
        setCart(arrFilter)
        setItem('carrinho', arrFilter)

      } else{
        copyCart["quantity"] = 1
        console.log(copyCart)
        setCart([...copyCart, obj])
        setItem('carrinho', [...copyCart, obj])
      }

    }

    return (
      <Container>
        <Img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="notebook"/>
        <CardInfo>
          <CardPrice>{formatCurrency(price, 'BRL')}</CardPrice>
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
