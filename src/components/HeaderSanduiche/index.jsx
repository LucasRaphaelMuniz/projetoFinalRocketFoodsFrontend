import { Container } from './styles';

import close from "../../assets/close.svg"
import { ButtonText } from '../../components/ButtonText'



export function HeaderSanduiche(){
    return(
        <Container>
            <div>
                <img src={close} alt="" />

                <ButtonText title="Menu"/>
            </div>


            
        </Container>
    )
}