import { Container, Content } from "./styles";

import { Prato } from '../../components/Prato';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { ButtonText } from '../../components/ButtonText';

import Voltar from '../../assets/setaVoltar.svg';




export function PratoPage() {
    return (
        <Container>
            
        <Container>
            <Header/>

            <Content>
                <img src={Voltar} alt="" />
                <ButtonText title="voltar"/>
            </Content>
                <main>
                    <Prato/>

                </main>
            
            <Footer/>
        </Container>


        </Container>
    )
}