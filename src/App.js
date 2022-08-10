import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Button, Container, Drawer, Form, Input, Menu, Navbar, Toggle } from './components';

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

  const menuData = [
    {
      label:'Design',
      subItems:[
      ]
    },
    {
      label:'Documentation',
      subItems:[

      ]
    },
    {
      label:'Components',
      subItems:[
        {label:'Container & Layout'},
        {label:'Input'},
        {label:'Button'},
        {label:'Drawer'},
        {label:'Navbar'},
        {label:'Menu'},
      ]
    },
    {
      label:'Resources',
      subItems:[

      ]
    }
  ]

  return (
    <div className="App">
      <header className="App-header">

        <Navbar>
        <div
          className='toggle-container'
        >

        <Toggle
            onClick={showDrawer} 
            style={{margin:'auto', position:'absolute', left:'20px'}}
            >
          </Toggle>
        </div>
          <Navbar.Logo logo={logo} title='Scistone' alt='scistone-logo' />
          <Navbar.Items >
            <Navbar.Item lineColor='white' title='Design' />
            <Navbar.Item title='Docs' />
            <Navbar.Item title='Components' />
            <Navbar.Item title='Resources' />
            <Navbar.Item title='Resources' />
          </Navbar.Items>
          <Navbar.Icons icons={contactIcons} />

        </Navbar>
      </header>
      <Container style={{textAlign:'center'}}>
      <Container row>
        <Container col style={{backgroundColor:'#FFBA00'}}>
          Col
        </Container>
      </Container>
      <Container row>
        <Container col12 style={{backgroundColor:'#FFBA00'}}>
          Col-12
        </Container>
        <Container col12 style={{backgroundColor:'#a8dadc'}}>
          Col-12
        </Container>
      </Container>
      <Container row>
        <Container col8 style={{backgroundColor:'#a8dadc'}}>
          Col-8
        </Container>
        <Container col8 style={{backgroundColor:'#FFBA00'}}>
          Col-8
        </Container>
        <Container col8 style={{backgroundColor:'#a8dadc'}}>
          Col-8
        </Container>
      </Container>
      <Container row>
        <Container col6 style={{backgroundColor:'#a8dadc'}}>
          Col-6
        </Container>
        <Container col6 style={{backgroundColor:'#FFBA00'}}>
          Col-6
        </Container>
        <Container col6 style={{backgroundColor:'#a8dadc'}}>
          Col-6
        </Container>
        <Container col6 style={{backgroundColor:'#FFBA00'}}>
          Col-6
        </Container>
      </Container>
      </Container>
      <Container>
        <Container row>
        
        <Drawer title={'Menu'} header={true} onClose={onClose} visible={visible}>
          <Menu
            data={menuData}
            drawer
          /> 
        </Drawer>


        </Container>
        
        <Form>

          <Form.Item>
            <Input type='email' placeholder='E-mail' label='E-mail' errorMessage='This field is required.' required/>
          </Form.Item>
          <Form.Item>
            <Input type='password' placeholder='Password' label='Password' errorMessage='This field is required.' required/>
          </Form.Item>
          
        </Form>

      </Container>
    </div>
  );
}

export default App;
