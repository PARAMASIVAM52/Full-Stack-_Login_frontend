import '../sass/Home.scss'
import img from '../assets/image.png';

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-left">
          <h1>Welcome to Our MERN Platform </h1>
          <p>Build powerful full-stack apps with MongoDB, Express, React & Node.</p>
          <button className="primary-btn">Get Started</button>
        </div>
        <div className="home-right">
          <img src={img} alt="" className="home-left" />
        </div>
      </div>
    </>
  );
}

export default Home;