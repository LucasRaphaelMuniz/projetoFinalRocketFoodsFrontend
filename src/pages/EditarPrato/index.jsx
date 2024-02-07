import { Container, Content, Image, Category } from "./styles";

import { Prato } from '../../components/Prato';

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

import { Link, useNavigate  } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { useAuth } from '../../hooks/auth'

import { useParams } from 'react-router-dom'
import { api } from "../../services/api";






export function EditarPrato(isAdmin={isAdmin}, data) {
    const params = useParams()
    const { user } = useAuth()
    const user_id = user.id



    const [food, setFood] = useState([])

    useEffect(() => {
        async function fetchFoods(){
            const res = await api.get(`/foods/${params.id}`)
            setFood(res.data)

        }
        fetchFoods()
    }, [])


    const [ imagem, setImagem] = useState(food.imagem)
    const [ imagemFile, setAvatarFile] = useState(null)
    


    const [ nome, setNome] = useState(food.nome)
    const [ categoria, setCategoria] = useState(food.categoria)
    const [ preco, setPreco] = useState(food.preco)   
    const [ descricao, setDescricao] = useState(food.descricao)


    const [ingredientes, setIngredientes] = useState([])
    const [newIngredientes, setNewIngredientes] = useState("")

    

    

    async function handleRemove(){
        const confirm = window.confirm("Deseja realmente excluir este prato?") 

        if(confirm) {
            await api.delete(`foods/${params.id}`)
            navigate("/")

        }
    }

    useEffect(() => {
        async function fetchFoods(){
            const res = await api.get(`/foods/${params.id}`)
            setFood(res.data)
            setIngredientes(res.data.ingredientes); 
        }
        fetchFoods()
    }, []);


    function handleAddIngredientes(){
        setIngredientes(prevState => [...prevState, newIngredientes])
        setNewIngredientes("")
    }

    function handleRemoveIngredientes(deleted){
        setIngredientes(prevState => prevState.filter(ingredientes => ingredientes !== deleted))
    }

    function handleChangeImagem(event){
        const file = event.target.files[0];
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file);
        setImagem(imagePreview);
    }

    

    const navigate = useNavigate()

    async function handleUpdate() {

        await api.put(`/foods/editarprato/${params.id}`, {
            imagem,
            nome,
            categoria,
            preco,
            descricao,
            ingredientes,
            user_id
        })

        alert("Prato")
        navigate("/")

    }
    


    return (
            
        <Container>
            <Header isAdmin={isAdmin} />

            <Content>
                <Link to="/">                
                    <ButtonText title="voltar" icon={RxCaretLeft}/>
                </Link>



            <h1>Editar Prato</h1>
            
            <section>
                <Section title="Imagem do prato">
                    <Image className="image">
                    <label htmlFor="image">
                    <FiUpload size={"2.4rem"} />
                    <span>{"Selecione imagem para alterá-la"}</span>

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
                    placeholder={food.nome}
                    onChange={e => setNome(e.target.value)}
                />     

                <Section title="Categoria">
                    <Category className="category">
                        <label htmlFor="category">
                        <select
                            id="category"
                            value={categoria || food.categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            
                            >
                            <option value=""> {food.categoria} </option>
                            {!food.categoria && <option value="">Selecionar</option>}
                            {food.categoria != "Refeição" && (
                                <option value="refeicao">Refeição</option>
                            )}
                            {food.categoria != "Sobremesa" && (
                                <option value="sobremesa">Sobremesa</option>
                            )}
                            {food.categoria != "Bebida" && (
                                <option value="bebida">Bebida</option>
                            )}
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

                <Section title="Preço">     
                <Input
                    className="changeColor"
                    placeholder={food.preco}
                    onChange={(e) => setPreco(e.target.value)}

                /> 
                </Section> 

                <Section title="Descrição">     
                <Textarea
                    placeholder={food.descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    
                /> 
                </Section> 

                <Link to="/" className="ordenarBotoes">
                    <Button 
                    className="changeColorButtonExcluir"
                    title="Excluir"
                    onClick={handleRemove}
                    />
          

                    <Button 
                    className="changeColorButton"
                    title="Salvar Alterações"
                    onClick={handleUpdate}
                    />

                </Link>
                
            </section>        
        
            
            </Content>
            <Footer/>
        </Container>

    )
}