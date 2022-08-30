import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const Home = () => {
  const { logout, isAuthenticated, user, isLoading } = useAuth0();
  const { usr, setUsr } = useAuth();
  useEffect(() => {
    if (user && isLoading === false) {
      axios
        .post("http://localhost:3500/social_auth", { email: user?.email })
        .catch((err) => {
          console.log(err);
        });
      setUsr(user?.email);
    }
  }, [isLoading]);

  const handleLogout = () => {
    logout();
    setUsr(null);
  }
  return (
    <>
      <span>Hello world {JSON.stringify(user)}</span>
      <p>{usr + "aa"}</p>
    </>
  );
};

export default Home;
