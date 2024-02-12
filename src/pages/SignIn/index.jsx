import { useState } from "react";
import { Container, Form, Marca } from "./styles";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import marca from "../../assets/marcaLogo.svg";


export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

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
            onChange={(e) => setEmail(e.target.value)}
          />
        </Section>

        <Section title="Senha">
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Section>

        <Section>
          <Button title="Entrar" onClick={handleSignIn} />
        </Section>

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
