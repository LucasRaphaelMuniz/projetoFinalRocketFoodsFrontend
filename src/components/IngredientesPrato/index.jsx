import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function IngredientesPrato({isNew, value, onClick, placeholder,...rest}) {
  const meuInput = document.getElementById("meuInput");


  return (
    <Container isNew={isNew}>
      
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
        placeholder="Adicionar"
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