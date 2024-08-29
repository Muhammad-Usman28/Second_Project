import './App.css';
import Footer from './components/services/Footer';
import Items from './components/services/Items';
import Journal from './components/services/Journal';
import ServiceHeader from './components/services/ServiceHeader';
import Solution from './components/services/Solution';

// import Connect from './components/Connect';
// import Finalpart from './components/Finalpart';
// import FirstPart from './components/FirstPart';
// import Header from './components/Header';
// import Industries from './components/Industries';
// import Navbar from './components/Navbar';
// import Service from './components/Service';

function App() {
  return (
    <div>
      {/* <Header/>
      <Navbar/>
      <FirstPart/>
      <Service/>
      <Industries/>
      <Connect/>
      <Finalpart/> */}


      {/*  Services Page Component */}

      <ServiceHeader/>
      <Journal/>
      <Solution/>
      <Items/>
      <Footer/>


    </div>
  );
}

export default App;
