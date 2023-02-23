import './App.css';
import Navbar from './components/NavBar/Navbar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'

function App() {

  return (
    <section>
      <Navbar></Navbar>
      <ItemListContainer greeting="Lista de productos"></ItemListContainer>
    </section>
  );
}

export default App;
