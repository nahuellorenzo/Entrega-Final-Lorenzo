import logo from './logo.svg';
import './App.css';
import saludar from './saludar.js';

const miNombre = () => 'Nahuel Lorenzo'
const estilos = {
  color: "red",
  marginTop: '20px'
}

function App() {
  
  saludar()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={estilos}>
          Hola soy {miNombre()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
