import { Container } from "./styles";


export function Textarea({value, data, ...rest}){
    return(
        <Container value={data} {...rest}>
            { value }
        </Container>
    )
}