import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { HamburgerMenu, Navbar } from './components';

import logo from './images/scistone_logo.png';

const contactIcons = [
  {
    url: 'https://github.com/scistione',
    icon: faGithub
  },
  {
    url: 'https://www.linkedin.com/company/scistonetech/',
    icon: faLinkedin
  }

]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar
          style={{ backgroundColor: 'black' }}
        >
          <HamburgerMenu/>
          <Navbar.Logo logo={logo} title='Scistone' alt='scistone-logo' />
          {/* 
          <Navbar.Items >
            <Navbar.Item lineColor='white' title='Design' />
            <Navbar.Item title='Docs' />
            <Navbar.Item title='Components' />
            <Navbar.Item title='Resources' />
          </Navbar.Items> 
          */}

          <Navbar.Icons icons={contactIcons} />
        </Navbar>
      </header>

    </div>
  );
}

export default App;
