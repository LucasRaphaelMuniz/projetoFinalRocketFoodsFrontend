import { Container, Content } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Link, useNavigate } from "react-router-dom";

import { Footer } from "../Footer";
import { Search } from "../Search";
import { ButtonText } from "../ButtonText";


export function Menu({ isAdmin, isMenu, setIsMenu, setSearch }) {
  const navigate = useNavigate();

  const { signOut } = useAuth();

  async function handleLogoOut() {
    await signOut();
    navigate("/");
    window.location.reload();
  }

  return (
    <Container isMenu={isMenu}>
      <Content>
        <Search setSearch={setSearch} setIsMenu={setIsMenu} />
        {isAdmin ? (
          <Link to="/novoprato">
            <ButtonText title="Novo Prato" setIsMenu={setIsMenu} />
          </Link>
        ) : null}
        <ButtonText title="Sair" onClick={handleLogoOut} />
      </Content>
      <Footer />
    </Container>
  );
}
