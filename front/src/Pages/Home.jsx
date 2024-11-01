import { useKindeAuth } from "@kinde-oss/kinde-auth-react";


export function Home (){
    const {login,isLoading , isAuthenticated, user} = useKindeAuth()

return (<>

<h1>This is Home page </h1>

</>)

}

