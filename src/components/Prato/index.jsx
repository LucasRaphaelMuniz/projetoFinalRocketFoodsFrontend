
import { Container } from "./styles";
import pratoInicio from '../../assets/pratoInicio.svg'
import { Button } from '../Button'
import { Quantidade } from '../Quantidade'
import { Tag } from '../Tag'
import carrinho from "../../assets/carrinho.svg"


export function Prato({price, title, description}){
  return(
    <Container>
        <img src={pratoInicio} alt="" />
        <h1>Salada Ravanello</h1>
        <h2>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</h2>
        <section>
          <Tag title="alface"/>
          <Tag title="cebola"/>
          <Tag title="pão naan"/>
          <Tag title="pepino"/>
          <Tag title="rabanete"/>
          <Tag title="tomate"/> 

        </section>
        
        <div>
          <Quantidade/>        

          <Button title="">
            <img src={carrinho} alt="" />
            Pedir - R$ {"50,00"}

          </Button>

        </div>
        

    </Container>
  );
}