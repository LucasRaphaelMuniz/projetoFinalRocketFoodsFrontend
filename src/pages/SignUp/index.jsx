import { Container, Form, Marca } from "./styles";

import { Link } from 'react-router-dom'


import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'

import marca from "../../assets/marcaLogo.svg"



export function SignUp() {
    return (
        <Container>

            <Marca>
                    <img src={marca} alt="" />
            </Marca>
            
            <Form>
                

                <Section title="Seu Nome">
                    <Input 
                        placeholder="Exemplo: Lucas Muniz"
                        type="text"
                    />
                </Section>

                <Section title="Email">
                    <Input  
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="text"
                    />
                </Section>
                
                <Section title="Senha">
                    <Input 
                        placeholder="No mínimo 6 caracteres"
                        type="text"
                    />
                </Section>

                <Section>

                    <Button title="Criar Conta"/>
                </Section>

                
            <Link to="/">
                Já tenho uma conta
            </Link>

            </Form>

        </Container>
    )
}