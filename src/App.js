import LetsPlay from './components/LetsPlay';
import './App.css';
import GreetUser from './components/GreetUser';

function App() {
  return (
    <div className="App">
      <h1 className="app-header">Ikea or Cheese</h1>
      <LetsPlay />
      <GreetUser />
    </div>
  );
}

export default App;
