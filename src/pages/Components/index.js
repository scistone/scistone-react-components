import React from 'react'
import { Container, Menu } from '../../components';



export default function Components(props) {
    const menuData = [
        {
            label: 'Container',
            subItems: [
                {
                    label: 'Row'
                },
                {
                    label: 'Column'
                },
                {
                    label: 'Layout'
                }
            ]
        },
        {
            label: 'Input',
            subItems: [

            ]
        },
        {
            label: 'Button',
            subItems: [
            ]
        },
        {
            label: 'Toggle',
            subItems: [

            ]
        }
        ,
        {
            label: 'Form',
            subItems: [
                {
                    label: 'Form'
                },
                {
                    label: 'Form Item'
                }
            ]
        }
        ,
        {
            label: 'Menu',
            subItems: [
                
            ]
        },
        {
            label: 'Navbar',
            subItems: [
                {
                    label: 'Navbar Items'
                },
                {
                    label: 'Navbar Item'
                },
                {
                    label: 'Navbar Logo'
                },
                {
                    label: 'Navbar Icons'
                }
            ]
        }
    ]

    return (
        <Container className='components__body' row>
            <Container col8 className='components__menu'>
            <Container className='components__menu-body'>
                <Menu

                    data={menuData}
                    
                />
            </Container>
            </Container>
            <Container col16>
                {props.children}
            </Container>
        </Container>
    )
}
