import logo from './assets/img/logo_sd.png';
import './assets/css/App.css';
import Menu from './components/Menu'; // Import the Menu component

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Menu /> {/* Add the Menu component */}
        <img src={logo} className="App-logo" alt="SDORAN logo" />
        <p> 
          SDoran.com | Sarah Doran | Engineering Leader @Travelport
        </p>
      </header>
    </div>
  );
}

export default App;
