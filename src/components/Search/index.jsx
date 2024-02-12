import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";

import { Input } from "../../components/Input";

export function Search({ setSearch, setIsMenu }) {
  return (
    <Container>
      <FiSearch onClick={() => setIsMenu(false)} />
      <Input
        placeholder="Busque por pratos ou ingredientes"
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  );
}
