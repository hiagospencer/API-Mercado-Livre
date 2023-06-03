/* eslint-disable react/prop-types */
import { useState} from 'react';
import ValueContext from './ValueContext';

import PropTypes from 'prop-types';

import { getItem } from '../service/LocalStorageFuncs';

export default function AppProvider ({children}){
    const [value, setValue] = useState()
    const [cart, setCart] = useState(getItem('carrinho') || [])
    const [ quantity, setQuantity] = useState(1)
    const [ carTotal, setCartTotal] = useState()

    return (
        <ValueContext.Provider value={{ value, setValue, cart, setCart, quantity, setQuantity, carTotal, setCartTotal}}>
            {children}
        </ValueContext.Provider>
    )
}

AppProvider.defaultProps = {
    children: ''
}

AppProvider.prototype = {
    children: PropTypes.string.isRequired
}.isRequired
