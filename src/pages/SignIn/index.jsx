import { Container, Form, Marca } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'

import marca from "../../assets/marcaLogo.svg"



export function SignIn() {
    return (
        <Container>
            <Marca>
                <img src={marca} alt="" />
            </Marca>
            <Form>
                
                
                <h2> Faça login </h2>

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

            <Button title="Entrar"/>
                
            <a href="#">
                Criar uma conta
            </a>

            </Form>

        </Container>
    )
}