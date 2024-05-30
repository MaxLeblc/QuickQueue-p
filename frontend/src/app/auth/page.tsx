"use client"

import { useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import RegisterForm from "@/components/auth/register"
import LoginForm from "@/components/auth/login"
import { UserContextProvider } from "@/components/context/userContext"
import { cn } from "@/lib/utils"

export default function Auth() {
    const [isRegister, setIsRegister] = useState(false)

    return (
        <UserContextProvider>
            <div className="w-full h-screen flex justify-center items-center">
                <Card className={cn("bg-custom-amber")}>
                    <CardHeader className={("flex justify-center items-center text-xl")}>
                        <Image
                            src="/favicon.ico"
                            width={40}
                            height={40}
                            alt="QuickQueue Logo"
                        />
                        <CardTitle  >{isRegister ? "Login" : "Register"}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isRegister ? <RegisterForm /> : <LoginForm />}
                    </CardContent>
                    <CardFooter className={cn("cursor-pointer font-medium")} >
                        {isRegister ?
                            <p onClick={() => setIsRegister(!isRegister)}>Don't have an account? <span className="underline underline-offset-1">Register</span></p>
                            :
                            <p onClick={() => setIsRegister(!isRegister)}>Already have an account? <span className="underline underline-offset-1">Login</span></p>
                        }
                    </CardFooter>
                </Card>
            </div>
        </UserContextProvider>
    )
}