import './App.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/'){
      navigate("/home");
    }
  })

  return (
    <div className="App">
      <Header/>
        <main>
          <Outlet/>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
