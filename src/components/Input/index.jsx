import { Container } from "./styles";

export function Input({ data, icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={"2rem"} />}
      <input value={data} {...rest} />
    </Container>
  );
}