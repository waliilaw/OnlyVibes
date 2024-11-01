import { useKindeAuth } from "@kinde-oss/kinde-auth-react";


export function Home (){
    const {login , isAuthenticated, user} = useKindeAuth()

return (<>

{!isAuthenticated && (
<button onClick={login} type ="button" className="login">Log In</button>
)}
{isAuthenticated && ( <div className="space-y-2 mt-10 mb-5">
          <p>Your name: {user?.given_name}</p>
          <p>Your email: {user?.email}</p>
          <img src={user?.picture} alt="user" />

          {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

          <button
            onClick={() => logout()}
            type="button"
            className="b"
          >
            Log out
          </button>
        </div>
      )}



</>)

}

