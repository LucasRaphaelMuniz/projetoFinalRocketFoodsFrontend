import { useState } from "react";
import { Container, Form, Marca } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import marca from "../../assets/marcaLogo.svg";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password, isAdmin })
      .then(() => {
        alert("Usuário cadastro com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.res) {
          alert(error.res.data.message);
        } else {
          alert("Não foi possivel cadastrar.");
        }
      });
  }

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
            onChange={(e) => setName(e.target.value)}
          />
        </Section>

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
          <Button title="Criar Conta" onClick={handleSignUp} />
        </Section>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
