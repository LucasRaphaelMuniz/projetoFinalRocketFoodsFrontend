import { Container, Content } from "./styles";

import { Prato } from '../../components/Prato';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { ButtonText } from '../../components/ButtonText';

import { RxCaretLeft } from "react-icons/rx";

import { Link } from 'react-router-dom'








export function PratoPage({isAdmin}) {
    return (

            
        <Container>
            <Header
                isAdmin={isAdmin}
            />

            <Content>
                <Link to="/">
                <ButtonText title="voltar" 
                    icon={RxCaretLeft}
                    style={{ fontSize: '2.4rem' }} 
                    />
                </Link>
                
            </Content>
                <main>
                    <Prato isAdmin={isAdmin} />
                         

                </main>
            
            <Footer/>
        </Container>

    )
}