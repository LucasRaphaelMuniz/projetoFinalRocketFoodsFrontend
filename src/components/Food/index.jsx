import { Container, Title} from "./styles";

import { FiHeart, FiEdit  } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";

import { Button } from '../../components/Button'

import pratoInicio from '../../assets/pratoInicio.svg'

import { useState } from 'react'

import { Link } from 'react-router-dom'

import { api } from '../../services/api';

import { Quantidade } from '../Quantidade'



export function Food({ data = {}, isAdmin, ...rest }) {
  const [number, setNumber] = useState(0);

  function handleQtade() {
    setNumber(0)
  }


  return (

    <>
    {isAdmin ? (
      <Link to={`/prato/${data.id}`}>          

      <Container {...rest} >
          <Link to={`/editarprato/${data.id}`}>          
            <FiEdit/>
          </Link>
            <img src={`${api.defaults.baseURL}/files/${data.imagem}`} alt="" />
          
  
          <Title>
              <h2>
                  {data.nome}
              </h2>
              <RxCaretRight/>
          </Title>


  
          <span>R$ {data.preco}</span>
          
      
  
      </Container>
      </Link>
  

    ) : (

      <Container>
      <section>
        <FiHeart/>
      </section>
      <Link to={`/prato/${data.id}`} className="image-link">         
        <img src={`${api.defaults.baseURL}/files/${data.imagem}`} alt="" />
      </Link>

      <Title>
          <h2>
              {data.nome}
          </h2>
          <RxCaretRight/>
      </Title>

      <Quantidade number={number} setNumber={setNumber} />

      <span>R$ {data.preco}</span>

      <Button title="incluir" onClick={handleQtade} />

    </Container>
    )
    }
  </>
    
  );
}