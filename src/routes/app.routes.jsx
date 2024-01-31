import { Routes, Route} from 'react-router-dom'

import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'
import { PratoPage } from '../pages/PratoPage'
import { NovoPrato } from '../pages/NovoPrato'
import { EditarPrato } from '../pages/EditarPrato'

export function AppRoutes({isAdmin = false}){
    return(
        <Routes>
            <Route path="/" element={<Home isAdmin={isAdmin}/>} />
            <Route path="menu" element={<Menu isAdmin={isAdmin}/>} />
            <Route path="/prato/:id" element={<PratoPage isAdmin={isAdmin}/>} />
            <Route path="/novoprato" element={<NovoPrato isAdmin={isAdmin}/>} />
            <Route path="/editarprato/:id" element={<EditarPrato isAdmin={isAdmin}/>} />
        </Routes>
    )
}