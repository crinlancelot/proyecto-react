import './App.css';
import { NavBar } from './components/NavBar';
import { Contenedor } from './components/Container';
import { ItemListContainer } from './components/ItemListContainer';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="masthead text-center">
        <NavBar/>
      </header>
      <Contenedor greeting="Bienvenidos a Cool Gaming"/>
      <ItemListContainer/>
      <Footer/>
    </div>
  );
}

export default App;
