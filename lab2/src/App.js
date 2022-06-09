import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Menu from './Menu'


function App() {
  return (
    <div className="App">

    
      
      <header className="App-header">
      <Clock  timezone="+03:00" format="12" /> 
      <Menu/>
       
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
