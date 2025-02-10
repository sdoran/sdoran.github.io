import logo from './assets/img/logo_sd.png';
import './assets/css/App.css';
//import Menu from './components/Menu'; // Import the Menu component

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="round logo with initials SD in black and white containing icons for laptop, mobile phones, music, arrows and ideas." />
        <h1>SARAH DORAN</h1>
      </header>
      <div className="section">
        <div className="hero">
          <p>I am an Engineering Leader at Travelport, leading a team of engineers to deliver high quality software solutions for the travel industry. I am passionate about building high performing teams and creating a culture of innovation and continuous improvement. I am also a strong advocate for diversity and inclusion in the workplace.</p>
            <p>For Work exprience and contact details find me on <a href='https://www.linkedin.com/in/sarahdoran/'>LinkedIn</a>
            </p>
          <p>This simple page was built using a React template and deployed via Github pages: <a href="https://github.com/sdoran/sdoran.github.io">Github Repo</a></p>
        </div>
        </div>
         <div className="footer">
          <p>© 2025 Sarah Doran</p>
        </div>
    </div>
  );
}

export default App;
