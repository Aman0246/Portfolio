import './App.css';
import Navbar from './component/Nav/Navbar';
import Intro from './component/Intro/Intro';
import Services from "./component/Services/Services";
import Experiance from "./component/Experiance/Experiance"
 


function App() {
  return (
    <div className="App"><Navbar/>
    <Intro/>
    <Services/>
    <Experiance></Experiance>
    
    </div>

    
  );
}

export default App;
