import { Container, Content } from "./styles";

import { HeaderSanduiche } from '../../components/HeaderSanduiche'
import { Footer } from '../../components/Footer'
import { Search } from '../../components/Search'
import { ButtonText } from '../../components/ButtonText'




export function Menu({isAdmin = true}) {
    return (
        <Container>
            <HeaderSanduiche/>
            <Content>
                <Search/>
                {isAdmin ? (
                <ButtonText title="Novo Prato"/>

                ) : null}
                <ButtonText title="Sair"/>
            </Content>
            <Footer/>
        </Container>
    )
}