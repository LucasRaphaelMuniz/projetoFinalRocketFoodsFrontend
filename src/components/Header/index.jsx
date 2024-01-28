import { Container } from './styles';

import tresBarrasMenu from "../../assets/tresBarrasMenu.svg"
import marca from "../../assets/marcaLogo.svg"
import carrinho from "../../assets/carrinho.svg"


export function Header(){
    return(
        <Container>
                <img src={tresBarrasMenu} alt="" />
                <img src={marca} alt="" />
                <img src={carrinho} alt="" />
            
        </Container>
    )
}