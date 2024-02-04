import { Container, Content } from "./styles";
import { useAuth } from '../../hooks/auth'

import { HeaderSanduiche } from '../../components/HeaderSanduiche'
import { Footer } from '../../components/Footer'
import { Search } from '../../components/Search'
import { ButtonText } from '../../components/ButtonText'

import { Link, useNavigate } from 'react-router-dom'

export function Menu({isAdmin}) {

    const [search, setSearch] = useState("")

    const navigate = useNavigate();    
    
    const { signOut } = useAuth();

    async function handleLogoOut() { 
        await signOut();
        navigate("/");
        window.location.reload();

    }

    return (
        <Container>
            <HeaderSanduiche
                isAdmin={isAdmin}
            />
            <Content>
                <Search
                    onChange={() => setSearch(e.target.value)}
                />
                {isAdmin ? (
                <Link to="/novoprato">
                    <ButtonText title="Novo Prato"/>
                </Link>

                ) : null}
                <ButtonText title="Sair" onClick={handleLogoOut} />
            </Content>
            <Footer/>
        </Container>
    )
}