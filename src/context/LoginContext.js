import { createContext, useState } from "react";

export const LoginContext = createContext()

const MOCK_USERS = [
    {
        id: 1,
        email: 'admin@coder.com',
        password: 'coder'
    },
    {
        id: 2,
        email: 'tutor@coder.com',
        password: 'coder'
    },
    {
        id: 3,
        email: 'a@b.com',
        password: '1234'
    }
]


export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false
    })
    console.log(user)

    const tryLogin = (values) => {
        const match = MOCK_USERS.find((user) => user.email === values.email)

        if (match && match.password === values.password) {
            setUser({
                logged: true,
                email: match.email
            })
        }
    }

    const logout = () => {
        setUser({
            email: null,
            logged: false
        })
    }


    return (
        <LoginContext.Provider value={{
            user,
            tryLogin,
            logout
        }}>
            {children}
        </LoginContext.Provider>
    )
}