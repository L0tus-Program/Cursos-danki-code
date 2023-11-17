
import './App.css';
import Header from './Header';

function App(props) {
  return (
    <div className='App'>
      <Header texto="button" />
      <h1>Isso é {props.texto}</h1>
    </div>

  );
}

export default App;
