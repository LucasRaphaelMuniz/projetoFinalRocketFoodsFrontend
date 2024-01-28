import { Container, Brand, Copyright } from "./styles";

import marca from "../../assets/marcaFooter.svg";

export function Footer() {
  return (
    <Container>
      <Brand>
        <img src={marca} alt="Logo" />
      </Brand>

      <Copyright>
        © 2023 - Todos os direitos reservados.
      </Copyright>
    </Container>
  );
}