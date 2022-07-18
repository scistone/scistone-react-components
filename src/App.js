import { Navbar } from './components/Navbar/Navbar';
import {HamburgerMenu} from "./components/HamburgerMenu/HamburgerMenu"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='main-page'>
          <Navbar/>
          <HamburgerMenu></HamburgerMenu>
        </div>
      </header>
    </div>
  );
}

export default App;
