import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../sass/Dashboard.scss'

function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const API_URL=import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/");
        return;
      }

      try {
        const res = await axios.get(
          `${API_URL}/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setUserData(res.data);

      } catch (err) {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className='dash' style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Dashboard 🔐</h1>

      {userData ? (
        <>
          <p>{userData.message}</p>
          <p>User ID: {userData.userId}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;