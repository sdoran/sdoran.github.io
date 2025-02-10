import logo from './assets/img/logo_sd.png';
import './assets/css/App.css';
//import Menu from './components/Menu'; // Import the Menu component

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Menu /> Add the Menu component */}
        <img src={logo} className="App-logo" alt="SDORAN logo" />
        <h2>SDORAN.com</h2>
        <p> 
          Sarah Doran | Engineering Leader @Travelport
        </p>
        <p>LinkedIn: <a href='https://www.linkedin.com/in/sarahdoran/'>https://www.linkedin.com/in/sarahdoran/</a></p>
       
      </header>
    </div>
  );
}

export default App;
