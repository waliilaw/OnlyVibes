import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import {useState , useEffect} from 'react'
import './Dashboard.css'

export function Dashboard() {
    const { login, isLoading, isAuthenticated, user, logout } = useKindeAuth();
    const [musicLink , setMusicLink ] = useState('')
    const [musicList , setMusicList ] = useState([])
    
    const handleSubmit = function(e){
        e.preventDefault()
        if(musicLink){
            setMusicList([...musicList , { link : musicLink , votes : 0}])
            setMusicLink('')
        }
    }
    
    return (
        <>
            <h1>This is the dashboard</h1>

            {isLoading && <h1>Loading...</h1>}
 
            {!isLoading && !isAuthenticated && (
                <button onClick={login} type="button" className="login">Log In</button>
            )}

            {isAuthenticated && (
                <div className="user-info">
                    <p>Your name: {user?.given_name}</p>
                    <p>Your email: {user?.email}</p>
                    <img src={user?.picture || 'path/to/default-image.jpg'} alt="User" />

                    <button
                        onClick={() => logout()}
                        type="button"
                        className="logout"
                    >
                        Log Out
                    </button>

                    {/*Here is the music submission form oni-chaan UwU */}

                    <form onSubmit ={handleSubmit}>
                    <input
              type="url"
              placeholder="Enter music link"
              value={musicLink}
              onChange={(e) => setMusicLink(e.target.value)}
              required
            />
            <button type="submit">Submit Music</button>
          </form>
                    
                </div>
            )}
        </>
    );
}
