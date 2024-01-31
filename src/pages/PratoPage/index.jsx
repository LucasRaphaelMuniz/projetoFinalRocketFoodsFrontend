import { Container, Content } from "./styles";

import { Prato } from '../../components/Prato';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { ButtonText } from '../../components/ButtonText';

import { RxCaretLeft } from "react-icons/rx";





export function PratoPage() {
    return (

            
        <Container>
            <Header/>

            <Content>
                <ButtonText title="voltar" 
                    icon={RxCaretLeft}
                    style={{ fontSize: '2.4rem' }} 
                    />
            </Content>
                <main>
                    <Prato/>

                </main>
            
            <Footer/>
        </Container>

    )
}