import './App.css';
import { NavBar } from './components/NavBar';
import { Contenedor } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="masthead text-center">
        <NavBar/>
      </header>
      <Contenedor greeting="Bienvenidos a Cool Gaming"/>
    </div>
  );
}

export default App;
