import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function PratoItem({isNew, value, onClick, placeholder,...rest}) {
  return (
    <Container isNew={isNew}>
      
      <input
        type="text"
        value={value}
        placeholder="Adicionar"
        readOnly={!isNew}
      />
      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus/> : <FiX/>}
      </button>

    </Container>
  );
}