/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import { BsSearch } from 'react-icons/bs';

import { Button, Form, Input } from './styles';

import useAppContext from '../../Hook/useAppContext';



export default function index() {

  const {value, setValue} = useAppContext();

  const valueInput = (event) => {
    setValue(event.target.value)
  }


  const PreventDefault = (e) => {
    e.preventDefault();

  }

  return (
    <Form action="">
        <Input
          type="search"
          placeholder="Buscar produto"
          onChange={valueInput}
          required
        />

        <Button type="submit" onClick={PreventDefault}>
            <BsSearch />
        </Button>
    </Form>
  )
}
