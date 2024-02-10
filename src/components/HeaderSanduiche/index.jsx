import { Container } from './styles';

import { FiX } from "react-icons/fi";
import { ButtonText } from '../../components/ButtonText'

import { Link } from 'react-router-dom'




export function HeaderSanduiche({isAdmin}){
    return(
        <Container>
            <Link to="/">
                <ButtonText title="Menu" icon={FiX} />
            </Link>            
        </Container>
    )
}