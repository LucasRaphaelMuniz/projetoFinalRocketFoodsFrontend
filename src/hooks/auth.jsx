import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api'


export const AuthConext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})


    
    
    async function signIn({email, password}) {
        
        try {
            const res = await api.post("/sessions", { email, password})
            const { user, token} = res.data
            
            localStorage.setItem("@rocketfoods:user", JSON.stringify(user));
            localStorage.setItem("@rocketfoods:token", token);
            
            
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({ user, token})
            console.log(user)
            
        } catch (error){
            if(error.res){
                alert(error.res.data.message)
            } else {
                alert("Não foi possivel efetuar login.")
            }
        }
    }
    
    async function signOut(){
        localStorage.removeItem("@rocketfoods:token")
        localStorage.removeItem("@rocketfoods:user")


    }

    async function isAdmin(){
        const { isAdmin } = res.data
        console.log(isAdmin)
    }

    async function updatePrato(foods){
        try {
            await api.put("/foods", foods)
            setData({ foods })
            alert("Prato atualizado com sucesso.")

        } catch (error) {
            if (error.res) {
                alert(error.res.data.message)
            } else {
                alert("Não foi possivel atualizar prato")
            }
        }
    }
    
    useEffect(() => {
        const token = localStorage.getItem("@rocketfoods:token")
        const user = localStorage.getItem("@rocketfoods:user")

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        }

        setData({
            token, 
            user: JSON.parse(user)
        })

    }, [])

    return(
        <AuthConext.Provider value={{signIn, user: data.user, signOut, updatePrato}}>
            {children}
        </AuthConext.Provider>
    )
};

function useAuth(){
    const context = useContext(AuthConext)

    return context
}

export { AuthProvider, useAuth, }