/* eslint-disable react-hooks/rules-of-hooks */
import useAppContext from '../../../Hook/useAppContext';

import { Title, BoxResume, ProductResume, FreteResume, TotalResume, Button } from './styles';

export default function index() {

  const { carTotal } = useAppContext()

  return (
    <>
      <Title><h3>Resumo da compra</h3></Title>
      <BoxResume>
        <ProductResume>
          <span>Produto</span>
          <span>R$ {carTotal}</span>
        </ProductResume>

        <FreteResume>
          <span>Frete</span>
          <span>Grátis</span>
        </FreteResume>

        <TotalResume>
          <span>Total</span>
          <span>R$ {carTotal}</span></TotalResume>
        <Button>Continuar compra</Button>
      </BoxResume>
    </>
  )
}
