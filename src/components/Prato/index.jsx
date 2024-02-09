
import { Container } from "./styles";
import { Button } from '../Button'
import { Quantidade } from '../Quantidade'
import { Tag } from '../Tag'
import carrinho from "../../assets/carrinho.svg"

import { Link, useParams } from 'react-router-dom'

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth'
import { useState, useEffect } from 'react'







export function Prato({ data, isAdmin, ...rest }){

  const [number, setNumber] = useState(0);
  function handleQtade() {
    setNumber(0)
  }


  return(
    <Container {...rest} >
        <img src={`${api.defaults.baseURL}/files/${data.imagem}`} alt="" />
        <h1>{data.nome}</h1>
        <h2>{data.descricao}</h2>
        <section>
          {data.ingredientes.map((ingrediente, index) => (
            <Tag key={index} title={ingrediente.ingredientes} />
          ))}
        </section>
        
        <div className={`seu-contenedor ${isAdmin ? 'admin' : ''}`}>

          {!isAdmin && <Quantidade number={number} setNumber={setNumber} />
}

          {isAdmin ? (
            <Link to="/editarprato/:id">
              <Button title="Editar Prato">
              </Button>

            </Link>

          ) : (

            <Link to="">
                
              <Button title="" onClick={handleQtade}  >
                <img src={carrinho} alt="" 
                 />
                Pedir - R$ {data.preco}
              </Button>
            </Link>
          )}
      </div>
        

    </Container>
  );
}