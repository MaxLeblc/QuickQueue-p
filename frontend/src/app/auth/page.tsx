import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ProfileForm from "@/components/profileForm/index"
import { UserContextProvider } from "@/components/context/userContext"

export default function Auth() {

    return (
        <UserContextProvider>
            <div className="w-full h-full flex justify-center items-center">
                <Card>
                    <CardHeader>
                        <CardTitle>Register or Login</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ProfileForm />
                    </CardContent>
                </Card>
            </div>
        </UserContextProvider>
    )
}