import { useContext } from 'react';

import { BsSearch } from 'react-icons/bs';

import { Button, Form, Input } from './styles';

import valueContext from '../../Contexts/ValueContext';



export default function index() {

  const {value, setValue} = useContext(valueContext);

  const valueInput = (event) => {
    setValue(event.target.value)
  }

  return (
    <Form>
        <Input
          type="text"
          placeholder="Buscar produto"
          onChange={valueInput}
          required
        />

        <Button>
            <BsSearch />
        </Button>
    </Form>
  )
}
