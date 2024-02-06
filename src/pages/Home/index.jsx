import { Container, Content } from "./styles";

import { useState, useEffect } from 'react'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Food } from '../../components/Food'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'



import mobileBannerHome from "../../assets/mobileBannerHome.svg";
import { api } from "../../services/api";



export function Home({isAdmin}, nome) {

    const [search, setSearch] = useState("")
    const [foods, setFoods] = useState([])

    useEffect(() => {
        async function fetchFoods(){
            const res = await api.get(`/foods?nome=${search}&ingredientes=${search}`)
            setFoods(res.data)

        }
        fetchFoods()
    }, [search])

    return (
        <Container>
            <Header
                isAdmin={isAdmin} 
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
                            <colunas-container>
                            {
                                foods.map((food) => (
                                    <Food key={String(food.id)} data={food} isAdmin={isAdmin}/>
                                ))
                            }                         

                            </colunas-container>
                            

                        </Section>         

                        <Section title="Pratos principais">
                            <colunas-container>
                                <Food title="Suco de Laranja" price="11,93" isAdmin={isAdmin} />
                                <Food title="Suco de Laranja" price="11,93" isAdmin={isAdmin} />
                            </colunas-container>
                        </Section>    

                        <Section title="Bebidas">
                            <colunas-container>
                                <Food title="Suco de Laranja" price="11,93" isAdmin={isAdmin} />
                                <Food title="Suco de Laranja" price="11,93" isAdmin={isAdmin} />
                            </colunas-container>
                        </Section>    
                    </Content>
                </main>
            
            <Footer/>
        </Container>
    )
}