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







export function NovoPrato() {
    return (
            
        <Container>
            <Header/>

            <Content>
                <ButtonText title="voltar" icon={RxCaretLeft}/>



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
                    />
                    </label>
                    </Image>         
                </Section> 
                
                <Section title="Nome"/>     
                <Input 
                    className="changeColor"
                    placeholder="Ex.: Salada César"
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

                <Section title="Preço"/>     
                <Input
                    className="changeColor"
                    placeholder="R$ 00,00"
                /> 

                <Section title="Descrição"/>     
                <Textarea
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                /> 
                <Button 
                className="changeColorButton"
                title="Salvar Alterações"
                />
            </section>        
        
            
            </Content>
            <Footer/>
        </Container>

    )
}