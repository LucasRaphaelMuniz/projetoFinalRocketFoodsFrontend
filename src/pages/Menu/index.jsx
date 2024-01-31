import { Container, Content } from "./styles";

import { HeaderSanduiche } from '../../components/HeaderSanduiche'
import { Footer } from '../../components/Footer'
import { Search } from '../../components/Search'
import { ButtonText } from '../../components/ButtonText'

import { Link } from 'react-router-dom'







export function Menu({isAdmin = true}) {
    return (
        <Container>
            <HeaderSanduiche/>
            <Content>
                <Search/>
                {isAdmin ? (
                <Link to="/novoprato">
                    <ButtonText title="Novo Prato"/>
                </Link>

                ) : null}
                <ButtonText title="Sair"/>
            </Content>
            <Footer/>
        </Container>
    )
}