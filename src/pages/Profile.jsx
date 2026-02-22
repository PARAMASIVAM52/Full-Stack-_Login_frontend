import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const API_URL=import.meta.env.VITE_API_URL;

  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch(`${API_URL}/profile`, {
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Profile</h1>
      <h2>{message}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;
