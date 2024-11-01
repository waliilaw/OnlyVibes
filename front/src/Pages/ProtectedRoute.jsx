import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Outlet, Navigate } from "react-router-dom";

export function ProtectedRoute() {
  const { isLoading, isAuthenticated, login } = useKindeAuth();

  if (isLoading) {
    return <div>...Loading senpai</div>;
  }

  if (!isAuthenticated) {
    return (
      <>
        <div>Not Allowed Oni chaaan</div>
        <button onClick={login} type="button" className="login">Log In</button>
      </>
    );
  }

  return <Outlet />;
}