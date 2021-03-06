import React, {Component} from 'react';
import './header.css'
import { Link } from 'react-router-dom'

import { Menu , Header, Icon} from 'semantic-ui-react'
import LogMeIn from '../../pages/login/login'
class HeaderMain extends Component {
   render() {
      return (
         <div>
            <Header as='h2' className = 'header-main'>
               <Header.Content >
                  <Link to = '/'>
                  
                     <div style = {{color: 'black'}}>
                       <Icon name='paper plane outline'/>
                        Simple Forum
                     </div>
                  </Link>
                  </Header.Content>
               <Header.Subheader>Keeping things real simple.</Header.Subheader>
            </Header>
            <div>
            <Menu className = 'menu-main'>
               <Menu.Item>
                  <Link to='/aboutme'>
                     <Icon name = 'github' /> About Me
                  </Link>
               </Menu.Item>
                  <Menu.Item>
                     <Link to ='/'>
                        <Icon name = 'home' />Home 
                        </Link>
                  </Menu.Item>
                  <Menu.Item>
                     <Link to ='/createtopic'><Icon name = 'paper plane outline' />Create A Thread
                     </Link>
                  </Menu.Item>
                  <Menu.Item>
                     <Link to ='/user'>
                        <Icon name ='cogs' />User Settings
                        </Link>
                  </Menu.Item>
                  <LogMeIn /> 

               </Menu>
            </div>
         </div>
      )
   }
}

export default HeaderMain