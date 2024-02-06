import { Container, Content } from "./styles";

import { Prato } from '../../components/Prato';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { ButtonText } from '../../components/ButtonText';
import { useState, useEffect } from 'react';
import { RxCaretLeft } from "react-icons/rx";

import { Link } from 'react-router-dom'
import { api } from "../../services/api";
import { useParams } from 'react-router-dom'



export function PratoPage({isAdmin}) {
    const [data, setData] = useState(null);

    const params = useParams()

    useEffect(() => {
        async function fetchData() {
            const res = await api.get(`/foods/${params.id}`)
            setData(res.data)
        }
        fetchData()
    }, [params.id]); 

    return (

            
        <Container>
            <Header
                isAdmin={isAdmin}
            />

            <Content>
                <Link to="/">
                <ButtonText title="voltar" 
                    icon={RxCaretLeft}
                    style={{ fontSize: '2.4rem' }} 
                    />
                </Link>
                
            </Content>
                <main>

                {data && <Prato data={data} isAdmin={isAdmin} />}
                         

                </main>
            
            <Footer/>
        </Container>

    )
}