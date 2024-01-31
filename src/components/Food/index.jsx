import { Container, Title} from "./styles";

import { FiHeart, FiEdit  } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";


import { Button } from '../../components/Button'


import pratoInicio from '../../assets/pratoInicio.svg'

import { Quantidade } from '../../components/Quantidade'



export function Food({title, price, isAdmin = true }) {
  return (

    <>
    {isAdmin ? (
      <Container>
          <FiEdit
          />
  
          <img src={pratoInicio} alt="" />
  
          <Title>
              <h2>
                  {title}
              </h2>
              <RxCaretRight/>
          </Title>
  
          <span>R$ {price}</span>
  
  
      </Container>
    ) : (
      <Container>
      <FiHeart
      />

      <img src={pratoInicio} alt="" />

      <Title>
          <h2>
              {title}
          </h2>
          <RxCaretRight/>
      </Title>

      <span>R$ {price}</span>

      <Quantidade/>

      <Button title="incluir"/>
    </Container>
    )}
  </>
    
  );
}