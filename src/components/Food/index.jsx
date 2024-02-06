import { Container, Title} from "./styles";

import { FiHeart, FiEdit  } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";


import { Button } from '../../components/Button'
import { useState, useEffect } from 'react'


import pratoInicio from '../../assets/pratoInicio.svg'

import { Quantidade } from '../../components/Quantidade'

import { Link } from 'react-router-dom'

import { api } from '../../services/api';




export function Food({ data = {}, isAdmin, ...rest }) {

  return (

    <>
    {isAdmin ? (
      <Link to={`/prato/${data.id}`}>          

      <Container {...rest} >
          <Link to={`/editarprato/${data.id}`}>          
            <FiEdit/>
          </Link>
          
          <img src={pratoInicio} alt="" />
  
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
      <Link to={`/prato/${data.id}`}>          

      <Container>
      <section>
        <FiHeart/>
      </section>

      <img src={pratoInicio} alt="" />

      <Title>
          <h2>
              {data.nome}
          </h2>
          <RxCaretRight/>
      </Title>

      <span>R$ {data.preco}</span>

      <Quantidade/>

      <Button title="incluir"/>
    </Container>
    </Link>
    )
    }
  </>
    
  );
}