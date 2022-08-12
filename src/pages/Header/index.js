
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Navbar, Toggle, Drawer, Menu } from '../../components';

import logo from '../../images/scistone_logo.png';

const contactIcons = [
  {
    url: 'https://github.com/scistone',
    icon: faGithub
  },
  {
    url: 'https://www.linkedin.com/company/scistonetech/',
    icon: faLinkedin
  }

]

function Header() {
    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    };
    const showDrawer = () => {
        setVisible(true);
    };

    const menuData = [
        {
            label: 'Design',
            subItems: [
            ]
        },
        {
            label: 'Documentation',
            subItems: [

            ]
        },
        {
            label: 'Components',
            subItems: [
                { label: 'Container & Layout' },
                { label: 'Input' },
                { label: 'Button' },
                { label: 'Drawer' },
                { label: 'Navbar' },
                { label: 'Menu' },
            ]
        },
        {
            label: 'Resources',
            subItems: [

            ]
        }
    ]

    return (
        <header className="App-header" >
            <Navbar style={{position: 'fixed', top: '0'}} >
                <div
                    className='toggle-container'
                >

                    <Toggle
                        onClick={showDrawer}
                        style={{ margin: 'auto', position: 'absolute', left: '20px' }}
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
            <Drawer title={'Menu'} header={true} onClose={onClose} visible={visible}>
                <Menu
                    data={menuData}
                    drawer
                />
            </Drawer>
        </header>
    );
}

export default Header;
