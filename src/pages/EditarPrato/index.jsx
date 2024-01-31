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

import { Link } from 'react-router-dom'





export function EditarPrato(isAdmin={isAdmin} ) {
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
                    />
                    </label>
                    </Image>         
                </Section> 
                
                <Section title="Nome"/>     
                <Input 
                    className="changeColor"
                    placeholder="Salada César"
                />     

                <Section title="Categoria">
                    <Category className="category">
                        <label htmlFor="category">
                        <select 
                            id="category" 
                            

                        >
                            <option value="">Selecionar</option>
                            <option value="meal">Refeição</option>
                            <option value="dessert">Sobremesa</option>
                            <option value="beverage">Bebida</option>
                        </select>

                        <RiArrowDownSLine size={"2.4rem"} />
                        </label>
                    </Category>
                </Section>

                <Section title="Igredientes" > 
                    <div className="tags">
                        <PratoItem value="Pão Naan" /> 
                        <PratoItem isNew /> 
                    </div>

                    
                </Section>   

                <Section title="Preço">     
                <Input
                    className="changeColor"
                    placeholder="R$ 40,00"
                /> 
                </Section> 

                <Section title="Descrição">     
                <Textarea
                    placeholder="A Salada César é uma opção refrescante para o verão."
                /> 
                </Section> 

                <Link to="/" className="ordenarBotoes">
                    <Button 
                    className="changeColorButtonExcluir"
                    title="Excluir"
                    />
          

                    <Button 
                    className="changeColorButton"
                    title="Salvar Alterações"
                    />

                </Link>
                
            </section>        
        
            
            </Content>
            <Footer/>
        </Container>

    )
}