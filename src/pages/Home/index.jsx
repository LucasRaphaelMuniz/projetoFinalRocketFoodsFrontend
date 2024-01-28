import { Container, Content } from "./styles";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Food } from '../../components/Food'
import { Section } from '../../components/Section'

import mobileBannerHome from "../../assets/mobileBannerHome.svg";



export function Home() {
    return (
        <Container>
            <Header/>
                <main>
                    <div>
                        <header>
                            <img src={mobileBannerHome} alt="" />
                            <div>
                                <h1>Sabores inigualáveis</h1>
                                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                            </div>
                        </header>
                    </div>
                    <Content>
                        <Section title="Refeições">
                            <colunas-container>
                                <Food/>
                                <Food/>
                                <Food/>
                                <Food/>

                            </colunas-container>
                            

                        </Section>         

                        <Section title="Pratos principais">
                            <colunas-container>
                                <Food/>
                                <Food/>
                            </colunas-container>
                        </Section>    

                        <Section title="Bebidas">
                            <colunas-container>
                                <Food/>
                                <Food/>
                            </colunas-container>
                        </Section>    
                    </Content>
                </main>
            
            <Footer/>
        </Container>
    )
}