import { Container, Content, Image, Category } from "./styles";
import { useState } from 'react'

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { PratoItem } from '../../components/PratoItem';

import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

import {api} from '../../services/api'

import { Link, useNavigate } from 'react-router-dom'

import CircularJSON from 'circular-json';


export function NovoPrato({isAdmin}) {

    const [ imagem, setImagem] = useState(null)
    const [ nome, setNome] = useState("")
    const [ categoria, setCategoria] = useState("")
    const [ preco, setPreco] = useState("")   
    const [ descricao, setDescricao] = useState(" ")


    const [ingredientes, setIngredientes] = useState([])
    const [newIngredientes, setNewIngredientes] = useState("")

    const navigate = useNavigate()


    function handleAddIngredientes(){
        setIngredientes(prevState => [...prevState, newIngredientes])
        setNewIngredientes("")
    }

    function handleRemoveIngredientes(deleted){
        setIngredientes(prevState => prevState.filter(ingredientes => ingredientes !== deleted))
    }

    function handleChangeImagem(event){
        const file = event.target.files[0];
    
        const imagePreview = URL.createObjectURL(file);
        setImagem(imagePreview);
    }

    

    async function handleNewPrato(){

        if (!nome){
            return alert("Campo NOME é obrigatório!")
        }

        if (!categoria){
            return alert("Campo CATEGORIA é obrigatório!")
        }

        if (!preco){
            return alert("Campo PREÇO é obrigatório!")
        }

        if (!ingredientes){
            return alert("Campo INGREDIENTES é obrigatório!")
        }

        if(newIngredientes){
            return alert("verifique se adicinou todos ingredientes!")
        }

        await api.post("/foods", {
            imagem,
            nome,
            categoria,
            preco,
            descricao,
            ingredientes
        })

        alert("Prato criado com sucesso!")
        navigate("/")
    }

    return (
            
        <Container>
            <Header
                isAdmin={isAdmin}
            />

            <Content>
                <Link to="/">                
                    <ButtonText title="voltar" icon={RxCaretLeft}/>
                </Link>



            <h1>Novo Prato</h1>
            
            <section>
                <Section title="Imagem do prato">
                    <Image className="image">
                    <label htmlFor="image">
                    <FiUpload size={"2.4rem"} />
                    <span>{"Selecione imagem"}</span>

                    <input 
                        id="image" 
                        type="file"
                        onChange={handleChangeImagem}
                    />
                    </label>
                    </Image>         
                </Section> 
                
                <Section title="Nome"/>     
                <Input 
                    className="changeColor"
                    placeholder="Ex.: Salada César"
                    onChange={e => setNome(e.target.value)}
                />     

                <Section title="Categoria">
                    <Category className="category">
                        <label htmlFor="category">
                        <select 
                            id="category" 
                            onChange={e => setCategoria(e.target.value)}                       

                        >
                            <option value="">Selecionar</option>
                            <option value="Refeição">Refeição</option>
                            <option value="Sobremesa">Sobremesa</option>
                            <option value="Bebida">Bebida</option>
                        </select>

                        <RiArrowDownSLine size={"2.4rem"} />
                        </label>
                    </Category>
                </Section>

                <Section title="Igredientes" > 
                    <div className="tags">
                        {
                            ingredientes.map((ingredientes, index) => (
                                <PratoItem 
                                    key={String(index)}
                                    value={ingredientes}
                                    onClick={() => {handleRemoveIngredientes(ingredientes)}}
                                /> 
                            ))
                        }
                        <PratoItem 
                            isNew 
                            onChange={e => setNewIngredientes(e.target.value)}
                            value={newIngredientes}
                            onClick={handleAddIngredientes}
                        /> 
                    </div>

                    
                </Section>   

                <Section title="Preço"/>     
                <Input
                    className="changeColor"
                    placeholder="R$ 00,00"
                    onChange={e => setPreco(e.target.value)}

                /> 

                <Section title="Descrição"/>     
                <Textarea
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    onChange={e => setDescricao(e.target.value)}

                /> 

                <Button 
                className="changeColorButton"
                title="Salvar"
                onClick={handleNewPrato}
                />

            </section>        
        
            
            </Content>
            <Footer/>
        </Container>

    )
}