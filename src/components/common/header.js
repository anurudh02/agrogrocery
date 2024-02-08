
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import {
    MobileOutlined,
    MailOutlined,
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined ,
    UserOutlined,
    MenuOutlined 
  
  } from '@ant-design/icons';
function Appheader() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
  return (
    <div className='container'>
        <div className='topBar'>
            <div className='contactInfo'>
                <ul>
                    <li><a href="tel:864968934"><span><MobileOutlined />864968934</span></a></li>
                    <li><a href="mailto:contact@grocery.co.uk"><span><MailOutlined />contact@grocery.co.uk</span></a></li>
                </ul>
            </div>
            <div className='otherInfo'>
                <ul className='socialMedia'>
                    <li><a href='https://www.facebook.com'><FacebookOutlined /></a></li>
                    <li><a href='https://www.twitter.com'><TwitterOutlined /></a></li>
                    <li><a href='https://www.instagram.com'><InstagramOutlined /></a></li>

                </ul>
                <button><UserOutlined />My Account</button>
            </div>
        </div>
        <div className='header separator'>
            <div className='logo'>
                AGRO STORES
            </div>
            <div className='mobileVisible'>
            <Button type="primary" onClick={showDrawer}>
                <MenuOutlined />
            </Button>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <nav >
                    <ul>
                        <li><NavLink onClick={onClose} to='/'>Home</NavLink></li>
                        <li><NavLink onClick={onClose} to='/about'>About</NavLink></li>
                        <li><NavLink onClick={onClose} to='/shop'>Shop</NavLink></li>
                        <li><NavLink onClick={onClose} to='/contact'>Contact</NavLink></li>
                        <li><NavLink onClick={onClose} to='/faq'>FAQ</NavLink></li>
                    </ul>
                </nav>
                
            </Drawer>
            </div>
            <nav className='mobileHidden'>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/shop'>Shop</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/faq'>FAQ</NavLink></li>
                </ul>
            </nav>
        </div>
      
    </div>
  )
}

export default Appheader
