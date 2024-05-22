"use client"

import { createContext, useContext, ReactNode, useState, useEffect, useMemo } from "react"
import { useCookies } from "react-cookie"
import { toast } from "sonner"
import axios from "axios"

interface IUserContext {
    user: any;
    isAuthenticated: boolean;
    onUpdateUser: (updatedUser: any) => void;
    onLogout: () => void
}

export const UserContext = createContext<IUserContext>({
    user: null,
    isAuthenticated: false,
    onUpdateUser: (updatedUser: any) => { },
    onLogout: () => { }
})

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [cookie, setCookie, removeCookie] = useCookies(["authToken"])

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const onUpdateUser = (updatedUser: any) => {
        if (!updatedUser) {
            setUser(null)
            setIsAuthenticated(false)
            return
        }
    }

    const resetUser = () => {
        setUser(null)
        setIsAuthenticated(false)
    }

    const onLogout = () => {
        removeCookie("authToken")
        resetUser()
        toast.success("You are now logged out!")
    }

    const checkIsLogged = async () => {
        try {
            if (!cookie?.authToken) {
                resetUser()
                return
            }

            const response = await axios.get("/auth/check-token")

            const rawUser = response?.data

            if (!rawUser) {
                resetUser()
                return
            }

            onUpdateUser(rawUser)
        } catch (error: any) {
            console.log(error)
            resetUser()
        }
    }

    useEffect(() => {
        checkIsLogged()
    }, [cookie])

    const value = useMemo(() => ({
        user,
        isAuthenticated,
        onUpdateUser,
        onLogout
    }), [user, isAuthenticated])

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

export const useUserContext = () => {
    return useContext(UserContext)
}