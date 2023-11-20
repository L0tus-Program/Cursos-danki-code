
import './App.css';
import Header from './Header';
import Example_click from './Clicker';

function App(props) {
  return (
    <div className='App'>
      <Header texto="button" />
      <h1>Isso é {props.texto}</h1>
      <Example_click/>
    </div>

    
  );
}

export default App;
