import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export function Dashboard() {
    const { login, isLoading, isAuthenticated, user, logout } = useKindeAuth();

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
                    <img src={user?.picture} alt="user" />

                    <button
                        onClick={() => logout()}
                        type="button"
                        className="logout"
                    >
                        Log Out
                    </button>
                </div>
            )}
        </>
    );
}