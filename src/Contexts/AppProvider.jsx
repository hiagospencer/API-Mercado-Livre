import { useState} from 'react';
import ValueContext from './ValueContext';

import PropTypes from 'prop-types';

export default function AppProvider ({children}){
    const [value, setValue] = useState("notebook")

    return (
        <ValueContext.Provider value={{ value, setValue}}>
            {children}
        </ValueContext.Provider>
    )
}

AppProvider.prototype = {
    children: PropTypes.string.isRequired
}.isRequired
