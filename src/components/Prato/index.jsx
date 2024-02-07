
import { Container } from "./styles";
import pratoInicio from '../../assets/pratoInicio.svg'
import { Button } from '../Button'
import { Quantidade } from '../Quantidade'
import { Tag } from '../Tag'
import carrinho from "../../assets/carrinho.svg"

import { Link } from 'react-router-dom'



export function Prato({ data = {}, isAdmin, ...rest }){


  return(
    <Container {...rest} >
        <img src={imagem} alt="" />
        <h1>{data.nome}</h1>
        <h2>{data.descricao}</h2>
        <section>
          {data.ingredientes.map((ingrediente, index) => (
            <Tag key={index} title={ingrediente.ingredientes} />
          ))}
        </section>
        
        <div className={`seu-contenedor ${isAdmin ? 'admin' : ''}`}>

          {!isAdmin && <Quantidade />}

          {isAdmin ? (
            <Link to="/editarprato/:id">
              <Button title="Editar Prato">
              </Button>

            </Link>

          ) : (

            <Link to="/">
              <Button title="">
                <img src={carrinho} alt="" />
                Pedir - R$ {"50,00"}
              </Button>
            </Link>
          )}
      </div>
        

    </Container>
  );
}