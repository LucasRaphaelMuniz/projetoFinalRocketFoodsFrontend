import { Container } from './styles';

import tresBarrasMenu from "../../assets/tresBarrasMenu.svg"
import marca from "../../assets/marcaPoligono.svg"
import carrinho from "../../assets/carrinho.svg"
import admin from "../../assets/admin.svg"


export function Header({ isAdmin = true }) {
    return (
      <>
        {isAdmin ? (
          <Container>
            <img src={tresBarrasMenu} alt="" />
            <section>
                <img src={marca} alt="" />
                <h1>food explorer</h1>
                <h2>admin</h2>
            </section>
                <img src="" alt="" />


        </Container>
        ) : (
          <Container>
            <img src={tresBarrasMenu} alt="" />
            <section>
                <img src={marca} alt="" />
                <h1>food explorer</h1>
            </section>
                <img src={carrinho} alt="" />
          </Container>
        )}
      </>
    );
  }