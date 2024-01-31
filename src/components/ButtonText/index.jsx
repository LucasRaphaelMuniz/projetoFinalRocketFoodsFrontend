import { Container } from "./styles";

export function ButtonText({ title, children, icon: Icon, ...rest }) {
  return (
    <Container 
      type="button"
      {...rest}
    >
      {Icon && <Icon size={"2.2rem"} />}

      {title}
      {children}
    </Container>
  );
}
