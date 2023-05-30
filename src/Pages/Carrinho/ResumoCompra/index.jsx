
import { Title, BoxResume, ProductResume, FreteResume, TotalResume, Button } from './styles';

export default function index() {
  return (
    <>
      <Title><h3>Resumo da compra</h3></Title>
      <BoxResume>
        <ProductResume>
          <span>Produto</span>
          <span>R$ 1500,00</span>
        </ProductResume>

        <FreteResume>
          <span>Frete</span>
          <span>Grátis</span>
        </FreteResume>

        <TotalResume>
          <span>Total</span>
          <span>R$ 1500,00</span></TotalResume>
        <Button>Continuar compra</Button>
      </BoxResume>
    </>
  )
}
