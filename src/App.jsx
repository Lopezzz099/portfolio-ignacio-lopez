import './App.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './Components/Footer/Footer';
import HeaderContainer from './Components/Header/HeaderContainer';

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
      <HeaderContainer/>
        <main>
          <Outlet/>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
