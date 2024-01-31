import { Container } from './styles';

import tresBarrasMenu from "../../assets/tresBarrasMenu.svg"
import marca from "../../assets/marcaPoligono.svg"
import carrinho from "../../assets/carrinho.svg"
import admin from "../../assets/admin.svg"

import { Link } from 'react-router-dom'



export function Header({ isAdmin}) {
    return (
      <>
        {isAdmin ? (
          <Container>
            <Link to="/menu">
              <img src={tresBarrasMenu} alt="" /> 
            </Link>
            <section>
                <img src={marca} alt="" />
                <h1>food explorer</h1>
                <h2>admin</h2>
            </section>
                <img src="" alt="" />


        </Container>
        ) : (
          <Container>
            <Link to="/menu">
              <img src={tresBarrasMenu} alt="" /> 
            </Link>
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