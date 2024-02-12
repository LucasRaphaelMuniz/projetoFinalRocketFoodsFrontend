import { Container, Content, Image, Category } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { IngredientesPrato } from "../../components/IngredientesPrato";

import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useAuth } from "../../hooks/auth";

import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useMediaQuery } from "react-responsive";

export function EditarPrato(isAdmin = { isAdmin }, data) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const params = useParams();
  const { user } = useAuth();
  const user_id = user.id;

  const [food, setFood] = useState(null);

  const [imagem, setImagem] = useState(null);
  const [imagemFile, setImagemFile] = useState("");
  const [imagemUpdate, setImagemUpdate] = useState(null);
  const [imagemOriginal, setImagemOriginal] = useState(null);

  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  const [ingredientes, setIngredientes] = useState([]);
  const [newIngredientes, setNewIngredientes] = useState("");

  useEffect(() => {
    async function fetchFoods() {
      try {
        const res = await api.get(`/foods/${params.id}`);
        setFood(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFoods();
  }, [params.id]);

  useEffect(() => {
    if (food) {
      setImagemFile(food.imagem);
      setImagem(food.imagem);
      setNome(food.nome);
      setCategoria(food.categoria);
      setPreco(food.preco);
      setDescricao(food.descricao);

      const todosIngredientes = food.ingredientes.map(
        (ingrediente) => ingrediente.ingredientes
      );
      setIngredientes(todosIngredientes);

      setImagemOriginal(food.imagem);
    }
  }, [food]);

  function handleAddIngredientes() {
    setIngredientes((prevState) => [...prevState, newIngredientes]);
    setNewIngredientes("");
  }

  function handleRemoveIngredientes(deleted) {
    setIngredientes((prevState) =>
      prevState.filter((ingrediente) => ingrediente !== deleted)
    );
  }

  function handleChangeImagem(e) {
    const file = e.target.files[0];
    setImagem(file);
    setImagemUpdate(file);
    setImagemFile(file.nome);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente excluir este prato?");

    if (confirm) {
      await api.delete(`foods/${params.id}`);
      navigate("/");
    }
  }

  const navigate = useNavigate();

  async function handleUpdate() {
    if (imagem != imagemOriginal) {
      const formData = new FormData();
      formData.append("imagem", imagem);

      await api.patch(`/foods/imagem/${params.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }

    await api.put(`/foods/editarprato/${params.id}`, {
      nome,
      categoria,
      preco,
      descricao,
      ingredientes,
      user_id,
    });

    alert("Prato atualizado com sucesso.");
    navigate("/");
  }

  return (
    <Container>
      <Header isAdmin={isAdmin} />

      <Content>
        <Link to="/">
          <ButtonText
            title="voltar"
            icon={RxCaretLeft}
            className="buttonBack"
          />
        </Link>

        <h1>Editar Prato</h1>

        <section>
          <div className="faixa1">
            <Section title="Imagem do prato" className="imagemPrato">
              <Image className="image">
                <label htmlFor="image">
                  <FiUpload size={"2.4rem"} />
                  <span>{"Selecione imagem"}</span>

                  <input id="image" type="file" onChange={handleChangeImagem} />
                </label>
              </Image>
            </Section>

            <Section title="Nome" className="nome">
              <Input
                className="changeColor"
                placeholder={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Section>

            <Section title="Categoria" className="categoria">
              <Category className="category">
                <label htmlFor="category">
                  <select
                    id="category"
                    value={categoria || categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                  >
                    <option value=""> {categoria} </option>
                    {!categoria && <option value="">Selecionar</option>}
                    {categoria != "Refeição" && (
                      <option value="refeicao">Refeição</option>
                    )}
                    {categoria != "Sobremesa" && (
                      <option value="sobremesa">Sobremesa</option>
                    )}
                    {categoria != "Bebida" && (
                      <option value="bebida">Bebida</option>
                    )}
                  </select>

                  <RiArrowDownSLine size={"2.4rem"} />
                </label>
              </Category>
            </Section>
          </div>

          <div className="faixa2">
            <Section title="Igredientes">
              <div className="tags">
                {ingredientes.map((ingrediente, index) => (
                  <IngredientesPrato
                    key={String(index)}
                    value={ingrediente}
                    onClick={() => {
                      handleRemoveIngredientes(ingrediente);
                    }}
                  />
                ))}
                <IngredientesPrato
                  isNew
                  onChange={(e) => setNewIngredientes(e.target.value)}
                  value={newIngredientes}
                  onClick={handleAddIngredientes}
                />
              </div>
            </Section>

            <Section title="Preço">
              <Input
                className="changeColor"
                placeholder={`R$ ${preco}`}
                type="number"
                onChange={(e) => setPreco(e.target.value)}
              />
            </Section>
          </div>

          <Section title="Descrição">
            <Textarea
              placeholder={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="textArea"
            />
          </Section>

          <div className="faixa4">
            <Link to="/" className="ordenarBotoes">
              <Button
                className="changeColorButtonExcluir"
                title="Excluir Prato"
                onClick={handleRemove}
              />

              <Button
                className="changeColorButton"
                title="Salvar Alterações"
                onClick={handleUpdate}
              />
            </Link>
          </div>
        </section>
      </Content>
      <Footer />
    </Container>
  );
}
