import { Container, Title} from "./styles";

import { FiHeart, FiEdit  } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";


import { Button } from '../../components/Button'


import pratoInicio from '../../assets/pratoInicio.svg'

import { Quantidade } from '../../components/Quantidade'

import { Link } from 'react-router-dom'




export function Food({title, price, isAdmin}) {
  return (

    <>
    {isAdmin ? (
      <Link to="/prato/:id">          

      <Container>
          <Link to="/editarprato/:id">          
            <FiEdit/>
          </Link>

          <img src={pratoInicio} alt="" />
  
          <Title>
              <h2>
                  {title}
              </h2>
              <RxCaretRight/>
          </Title>
  
          <span>R$ {price}</span>
  
  
      </Container>
      </Link>


    ) : (
      <Link to="/prato/:id">          

      <Container>
      <section>
        <FiHeart/>
      </section>

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
    </Link>
    )
    }
  </>
    
  );
}