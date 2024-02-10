import { Container, Logout } from './styles';

import tresBarrasMenu from "../../assets/tresBarrasMenu.svg"
import marca from "../../assets/marcaPoligono.svg"
import carrinho from "../../assets/carrinho.svg"
import admin from "../../assets/admin.svg"
import { useMediaQuery } from "react-responsive";
import { FiLogOut } from "react-icons/fi";



import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/auth'


import { Search } from '../Search'
import { Button } from '../Button'




export function Header({ isAdmin, setSearch }) {
const isDesktop = useMediaQuery({ minWidth: 1024 });
const { signOut } = useAuth();
const navigate = useNavigate();    


    async function handleLogoOut() { 
        await signOut();
        navigate("/");
        window.location.reload();

    }


    return (
      <>
        {isAdmin ? (
          <Container>
            {!isDesktop && (
              <Link to="/menu">
                <img src={tresBarrasMenu} alt="" /> 
              </Link>
            )}

            <section>
                <img src={marca} alt="" />
                <h1>food explorer</h1>
                <h2>admin</h2>
            </section>
                <img src="" alt="" />
            
            {isDesktop && <Search className="barraPesquisa" setSearch={setSearch} /> }
            
            {isDesktop && 
              <Link to="/novoprato">
                <Button title="Novo Prato" className="botaoPedir" />
              </Link>
            }

            {isDesktop && 
              <Logout>
                  <FiLogOut size={"3.2rem"} onClick={handleLogoOut} />
              </Logout>
            }


        </Container>
        ) : (
          <Container>
            {!isDesktop && (
              <Link to="/menu">
                <img src={tresBarrasMenu} alt="" /> 
              </Link>
            )
            }
            <section>
                <img src={marca} alt="" />
                <h1>food explorer</h1>
            </section>

            {isDesktop && <Search className="barraPesquisa" /> }
            {isDesktop && 
              <Button title="Pedir (0)" className="botaoPedir" >
                <img src={carrinho} alt="" 
                 />
              </Button> 
            }

            {isDesktop && 
              <Logout>
                  <FiLogOut size={"3.2rem"} onClick={handleLogoOut} />
              </Logout>
            }



            {!isDesktop && (
                <div className='carrinhoQtde'>                
                  <img src={carrinho} alt=""/>
                  <span>{0} </span>
                </div>
              )
            }
            
          </Container>
        )}
      </>
    );
  }