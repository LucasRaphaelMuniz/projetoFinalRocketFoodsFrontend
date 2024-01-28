import { Container, Title} from "./styles";

import { FiHeart } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";


import { Button } from '../../components/Button'


import pratoInicio from '../../assets/pratoInicio.svg'


export function Food() {
  return (
    <Container>
        <FiHeart
        />

        <img src={pratoInicio} alt="" />

        <Title>
            <h2>
                Suco de maracujá
            </h2>
            <RxCaretRight/>
        </Title>

        <span>R$ 13,97</span>

        <Button title="incluir"/>
    </Container>
  );
}