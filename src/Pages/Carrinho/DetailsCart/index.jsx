
import { Table, Quantidade, Button } from './styles'

export default function index() {

  return (
    <div className="overflow">
    <Table>
        <thead>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>

        <tbody>

            {/* {cart.length === 0 && (
                <tr>
                <td colSpan='5' style={{ textAlign: 'center' }}>
                  <b>Carrinho de compras vazio.</b>
                </td>
              </tr>
            )} */}

            <tr>
                <td>celular</td>

                <td  colSpan='2'><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p></td>

                <td>
                    <Quantidade>
                        <Button>-</Button>
                        <span>1</span>
                        <Button>+</Button>
                    </Quantidade>
                </td>

                <td>R$ 1500,00</td>
            </tr>
        </tbody>
    </Table>
    </div>
  )
}
