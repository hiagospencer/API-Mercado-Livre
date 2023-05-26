import {useState} from 'react';

import fetchProducts from '../../api/fetchProducts';

import { BsSearch } from 'react-icons/bs';

import { Button, Form, Input } from './styles';

export default function index() {

  const [ value, setValue] = useState('');

  const valueInput = (event) => {
    setValue(event.target.value)

  }
  
  return (
    <Form>
        <Input
          type="search"
          value={value}
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
