import { useKindeAuth } from "@kinde-oss/kinde-auth-react";


export function Home (){
    const {login , register } = useKindeAuth()

return (<>
<button onClick={login} type ="button">Log In</button>
<button onClick={register} type ="button">Log In 2</button>


</>)

}

