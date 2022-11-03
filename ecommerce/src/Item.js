import './App.css';
import { NavBar } from './components/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Footer } from './components/Footer';

function Item() {
  return (
    <div className="App">
      <header className="masthead text-center">
        <NavBar/>
      </header>
      <ItemDetailContainer/>
      <Footer/>
    </div>
  );
}

export default Item;