import { Navbar } from './components/Navbar/Navbar';
import {HamburgerMenu} from "./components/HamburgerMenu/HamburgerMenu"
import {BaseContainer} from './components/BaseContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='main-page'>
          <Navbar/>
          <BaseContainer/>
        </div>
      </header>
    </div>
  );
}

export default App;
