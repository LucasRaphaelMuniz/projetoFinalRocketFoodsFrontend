import { Container } from "./styles";
import { useMediaQuery } from "react-responsive";

export function ButtonText({ title, children, icon: Icon, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container type="button" {...rest}>
      {isDesktop
        ? Icon && <Icon size={"4.2rem"} />
        : Icon && <Icon size={"2.2rem"} />}

      {title}
      {children}
    </Container>
  );
}
