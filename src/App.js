import LetsPlay from './components/LetsPlay';
import './App.css';
import GreetUser from './components/GreetUser';
import DisplayWord from './components/DisplayWord';

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <h1 className="app-header">Ikea or Cheese</h1>
      <LetsPlay />
      <GreetUser />
      <DisplayWord word="cats"/>
    </div>
  );
}

export default App;
