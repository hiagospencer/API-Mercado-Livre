import { useContext} from 'react';
import  ValueContext from '../Contexts/ValueContext';

export default function useAppContext () {
    const context = useContext(ValueContext);

    if(context === undefined){
        throw new Error("Não esta dentro do contexto")
    }

    return context;
}
