import { FiMinus, FiPlus } from "react-icons/fi";

import { Container } from "./styles";

export function Quantidade() {
  return (
    <Container>
      <button ><FiMinus /></button>
      <span>{"2"}</span>
      <button ><FiPlus /></button>
    </Container>
  );
}
