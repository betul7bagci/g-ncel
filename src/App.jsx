import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SiteRoutes from "./SiteRoutes";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) ?? null);
  }, []);

  const handleLogin = () => {
    const user = { id: 1, name: "ayse" };
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <Navbar handleLogOut={handleLogOut} user={user} />
      <div className="container">
        <div className="col-sm-12">
          <SiteRoutes handleLogin={handleLogin} user={user} />
        </div>
      </div>
    </>
  );
}

export default App;
