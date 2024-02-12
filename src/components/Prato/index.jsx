import { Container } from "./styles";

import { Button } from "../Button";
import { Quantidade } from "../Quantidade";
import { Tag } from "../Tag";
import carrinho from "../../assets/carrinho.svg";

import { Link } from "react-router-dom";

import { api } from "../../services/api";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export function Prato({ data, isAdmin, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [number, setNumber] = useState(0);
  function handleQtade() {
    setNumber(0);
  }

  return (
    <Container {...rest}>
      <img
        src={`${api.defaults.baseURL}/files/${data.imagem}`}
        alt=""
        className="pratoImage"
      />
      <div>
        <h1>{data.nome}</h1>
        <h2>{data.descricao}</h2>
        <section>
          {data.ingredientes.map((ingrediente, index) => (
            <Tag key={index} title={ingrediente.ingredientes} />
          ))}
        </section>

        <div className={`seu-contenedor ${isAdmin ? "admin" : ""}`}>
          {!isAdmin && <Quantidade number={number} setNumber={setNumber} />}
          {isAdmin ? (
            <Link to={`/editarprato/${data.id}`}>
              <Button title="Editar Prato" className="botaoEditar" />
            </Link>
          ) : (
            <Link to="">
              <Button title="" onClick={handleQtade}>
                <img src={carrinho} alt="" />
                Pedir - R$ {data.preco}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
}
