import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Button, Drawer, Navbar } from './components';

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
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="App">
      <header className="App-header">
      
        <Navbar
          style={{ backgroundColor: 'black' }}
        >

          <Navbar.Logo logo={logo} title='Scistone' alt='scistone-logo' />

          <Navbar.Items >
            <Navbar.Item lineColor='white' title='Design' />
            <Navbar.Item title='Docs' />
            <Navbar.Item title='Components' />
            <Navbar.Item title='Resources' />
          </Navbar.Items> 
          {/* 
            <Navbar.Item lineColor='white' title='Design' />
            <Navbar.Item title='Docs' />
            <Navbar.Item title='Components' />
            <Navbar.Item title='Resources' />
          */}

          <Navbar.Icons icons={contactIcons} />
        </Navbar>
      </header>
      <Button  
          size='md'
          type='primary'
          onClick={showDrawer} >
          Add to Cart
        </Button>
          <Drawer header={true} onClose={onClose} visible={visible}>
            <div style={{display:'flex', flexDirection:'column'}}>

              <Navbar.Item titleColor='black' title='Design' url='design/'/>
              <Navbar.Item titleColor='black' title='Docs' />
              <Navbar.Item titleColor='black' title='Components' />
              <Navbar.Item titleColor='black' title='Resources' />
            </div>
          

          </Drawer>

    </div>
  );
}

export default App;
