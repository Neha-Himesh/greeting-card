import logo from './logo.svg';
import './App.css';
import Message from './Message';
import Name from './Name';

function App() {
  return (
    <div className="App">
      <h1>Happy Birthday!</h1>
      <Message message="May you shine as bright as sun!" />
      <Name name='Neha' />
    </div>
  );
}

export default App;