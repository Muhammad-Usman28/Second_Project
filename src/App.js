import './App.css';
import Connect from './components/Connect';
import Finalpart from './components/Finalpart';
import FirstPart from './components/FirstPart';
import Header from './components/Header';
import Industries from './components/Industries';
import Navbar from './components/Navbar';
import Service from './components/Service';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <FirstPart/>
      <Service/>
      <Industries/>
      <Connect/>
      {/* <Finalpart/> */}
    </div>
  );
}

export default App;
