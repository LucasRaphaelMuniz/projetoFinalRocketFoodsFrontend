import { FiMinus, FiPlus } from "react-icons/fi";

import { Container } from "./styles";

export function Quantidade({ number, setNumber, updateQtdade }) {
  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <Container>
      <button onClick={decrementNumber}><FiMinus /></button>
      <span>{number}</span>
      <button onClick={incrementNumber}><FiPlus /></button>
    </Container>
  );
}
