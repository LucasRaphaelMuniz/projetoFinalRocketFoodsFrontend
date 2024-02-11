import { Container, Content, Image, Category } from "./styles";
import { useState } from 'react'

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { IngredientesPrato } from '../../components/IngredientesPrato';

import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

import {api} from '../../services/api'

import { Link, useNavigate } from 'react-router-dom'



export function NovoPrato({isAdmin}) {

    const [ imagem, setImagem] = useState(null)
    const [ imagemFile, setImagemFile] = useState("")
    const [ imagemUpdate, setImagemUpdate] = useState(null)
    const [ imagemOriginal, setImagemOriginal] = useState(null)

    const [ nome, setNome] = useState("")
    const [ categoria, setCategoria] = useState("")
    const [ preco, setPreco] = useState("")   
    const [ descricao, setDescricao] = useState(" ")


    const navigate = useNavigate()
    const [ingredientes, setIngredientes] = useState([])
    const [newIngredientes, setNewIngredientes] = useState("")



    function handleAddIngredientes(){
        setIngredientes(prevState => [...prevState, newIngredientes])
        setNewIngredientes("")
    }

    function handleRemoveIngredientes(deleted){
        setIngredientes(prevState => prevState.filter(ingredientes => ingredientes !== deleted))
    }

    function handleChangeImagem(e){
        const file = e.target.files[0];
        setImagem(file)
        setImagemUpdate(file)
        setImagemFile(file.nome)
        const formData = new FormData();
        formData.append("imagem", imagem)
        console.log(imagem)
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
            imagem: (imagem.name),
            nome,
            categoria,
            preco,
            descricao,
            ingredientes
        })

        console.log(imagem.name)


        alert("Prato criado com sucesso!")
        // navigate("/")
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
                <div className="faixa1">  

                    <Section title="Imagem do prato" className="imagemPrato">
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
                    
                    <Section title="Nome" className="nome">    
                        <Input 
                            className="changeColor"
                            placeholder="Ex.: Salada César"
                            onChange={e => setNome(e.target.value)}
                        />     
                    </Section> 

                    <Section title="Categoria" className="categoria" >
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
                </div>
                <div className="faixa2">  
                    <Section title="Igredientes" > 
                        <div className="tags">
                            {
                                ingredientes.map((ingredientes, index) => (
                                    <IngredientesPrato 
                                        key={String(index)}
                                        value={ingredientes}
                                        onClick={() => {handleRemoveIngredientes(ingredientes)}}
                                    /> 
                                ))
                            }
                            <IngredientesPrato 
                                isNew 
                                onChange={e => setNewIngredientes(e.target.value)}
                                value={newIngredientes}
                                onClick={handleAddIngredientes}
                            /> 
                        </div>

                        
                    </Section>   

                    <Section title="Preço"> 
                        <Input
                            className="changeColor"
                            placeholder="R$ 00,00"
                            type="number"

                            onChange={e => setPreco(e.target.value)}

                        /> 
                    </Section>   

                </div>


                <Section title="Descrição"/>     
                <Textarea
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    onChange={e => setDescricao(e.target.value)}

                /> 
            
                <div className="faixa4">

                    <Button 
                    className="changeColorButton"
                    title="Salvar alterações"
                    onClick={handleNewPrato}
                    />
                </div>


            </section>        
        
            
            </Content>
            <Footer/>
        </Container>

    )
}