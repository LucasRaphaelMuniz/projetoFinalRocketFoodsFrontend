import { Container, Logout } from "./styles";

import { useMediaQuery } from "react-responsive";

import { FiLogOut } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Search } from "../Search";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";

import tresBarrasMenu from "../../assets/tresBarrasMenu.svg";
import marca from "../../assets/marcaPoligono.svg";
import carrinho from "../../assets/carrinho.svg";

export function Header({ isAdmin, setSearch, setIsMenu, isMenu }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const { signOut } = useAuth();
  const navigate = useNavigate();

  async function handleLogoOut() {
    await signOut();
    navigate("/");
    window.location.reload();
  }

  return isMenu ? (
    <Container>
      <ButtonText title="Menu" icon={FiX} onClick={() => setIsMenu(false)} />
    </Container>
  ) : (
    <>
      {isAdmin ? (
        <Container>
          {!isDesktop && (
            <img src={tresBarrasMenu} alt="" onClick={() => setIsMenu(true)} />
          )}

          <section>
            <img src={marca} alt="" />
            <h1>food explorer</h1>
            <h2>admin</h2>
          </section>
          <img src="" alt="" />

          {isDesktop && <Search setSearch={setSearch} />}

          {isDesktop && (
            <Link to="/novoprato">
              <Button title="Novo Prato" className="botaoPedir" />
            </Link>
          )}

          {isDesktop && (
            <Logout>
              <FiLogOut size={"3.2rem"} onClick={handleLogoOut} />
            </Logout>
          )}
        </Container>
      ) : (
        <Container>
          {!isDesktop && (
            <img src={tresBarrasMenu} alt="" onClick={() => setIsMenu(true)} />
          )}
          <section>
            <img src={marca} alt="" />
            <h1>food explorer</h1>
          </section>

          {isDesktop && <Search setSearch={setSearch} />}
          {isDesktop && (
            <Button title={`Pedir (${0})`} className="botaoPedir">
              <img src={carrinho} alt="" />
            </Button>
          )}

          {isDesktop && (
            <Logout>
              <FiLogOut size={"3.2rem"} onClick={handleLogoOut} />
            </Logout>
          )}

          {!isDesktop && (
            <div className="carrinhoQtde">
              <img src={carrinho} alt="" />
              <span>{0} </span>
            </div>
          )}
        </Container>
      )}
    </>
  );
}
