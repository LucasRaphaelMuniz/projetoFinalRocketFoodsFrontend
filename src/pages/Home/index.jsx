import { Container, Content } from "./styles";

import { useState, useEffect } from 'react'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Food } from '../../components/Food'
import { Section } from '../../components/Section'

import { RxCaretRight } from "react-icons/rx";

import setaAvancar from "../../assets/setaAvancar.svg"
import setaVoltar from "../../assets/setaVoltar.svg"

import { useMediaQuery } from "react-responsive";



import mobileBannerHome from "../../assets/mobileBannerHome.svg";
import { api } from "../../services/api";
import { Search } from "../../components/Search";



export function Home({isAdmin}, nome) {
    const isDesktop = useMediaQuery({ minWidth: 1024 });


    const [search, setSearch] = useState("")
    const [foods, setFoods] = useState([])
    


    useEffect(() => {
        async function fetchFoods(){
                const res = await api.get(`/foods?search=${search}`);
                setFoods(res.data); 
        }
        fetchFoods();
    }, [search]);

    return (
        <Container>
            <Header
                isAdmin={isAdmin} 
                setSearch={setSearch}
            />

                <main>
                    <div>
                        
                        <header>
                            <img src={mobileBannerHome} alt="" />
                            <div>
                                <h1>Sabores inigualáveis</h1>
                                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                            </div>
                        </header>
                    </div>
                    <Content>
                        <Section title="Refeições">
                                <div className="setaEsquerda1">
                                    {isDesktop ? <img src={setaVoltar} alt=""/> : null}
                                </div>
                            <colunas-container>
                                    {
                                        foods
                                        .filter(food => food.categoria === "Refeição")
                                        .map((food) => (
                                            <Food key={String(food.id)} data={food} isAdmin={isAdmin}/>
                                        ))
                                    }                                     
                            </colunas-container>  
                                <div className="setaDireita1">
                                          
                                    {isDesktop ? <img src={setaAvancar} alt="" /> : null}

                                </div>
                        </Section>         

                        <Section title="Pratos principais">
                            <div className="setaEsquerda2">
                                {isDesktop ? <img src={setaVoltar} alt=""/> : null}

                            </div>
                            <colunas-container>

                            {
                                foods
                                .filter(food => food.categoria === "Sobremesa")
                                .map((food) => (
                                    <Food key={String(food.id)} data={food} isAdmin={isAdmin}/>
                                ))
                            } 

                            </colunas-container>
                            <div className="setaDireita2">
                            {isDesktop ? <img src={setaAvancar} alt="" /> : null}

                                  
                            </div>
                        </Section>    

                        <Section title="Bebidas">
                            <div className="setaEsquerda3">
                            {isDesktop ? <img src={setaVoltar} alt=""/> : null}
                            </div>
                            <colunas-container>

                            {
                                foods
                                .filter(food => food.categoria === "Bebida")
                                .map((food) => (
                                    <Food key={String(food.id)} data={food} isAdmin={isAdmin}/>
                                ))
                            } 

                            </colunas-container>
                            <div className="setaDireita3">
                            {isDesktop ? <img src={setaAvancar} alt="" /> : null}
                               
                            </div>
                        </Section>    
                    </Content>
                </main>
            
            <Footer/>
        </Container>
    )
}