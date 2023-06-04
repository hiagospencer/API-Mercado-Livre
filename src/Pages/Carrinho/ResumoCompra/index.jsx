/* eslint-disable react-hooks/rules-of-hooks */
import useAppContext from '../../../Hook/useAppContext';


import { Title, BoxResume, ProductResume, FreteResume, TotalResume, Button } from './styles';

export default function index() {

  const { carTotal } = useAppContext()

  const total = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(carTotal)

  const comprarFinalizada = () => {
    alert(`Compra no valor ${total}, finalizada com sucesso!`)
  }

  return (
    <>
      <Title><h3>Resumo da compra</h3></Title>
      <BoxResume>
        <ProductResume>
          <span>SubTotal</span>
          <span>{total}</span>
        </ProductResume>

        <FreteResume>
          <span>Frete</span>
          <span>Grátis</span>
        </FreteResume>

        <TotalResume>
          <span>Total</span>
          <span>{total}</span></TotalResume>
        <Button onClick={() => comprarFinalizada()}>Continuar compra</Button>
      </BoxResume>
    </>
  )
}
