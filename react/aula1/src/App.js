
import './App.css';

function App(props) {


  return (

    <div className="App">
      <h1>Olá Mundo {props.texto.objeto} </h1>
      <p>{props.texto.objeto2} </p>
    </div>
  );
}

export default App;
