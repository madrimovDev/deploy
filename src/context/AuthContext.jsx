import { createContext, useState } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)

    const login = (username, password) => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            if(user.username === username && user.password === password){
                setIsAuth(true)
            }
        }
    }

    const register = (username, password) => {
        localStorage.setItem('user', JSON.stringify({username, password}))
        setIsAuth(true)
    }

    return (
        <AuthContext.Provider value={{
            isAuth,
            login,
            register
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider