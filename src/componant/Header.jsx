import React from 'react'
import './Header.css'
import Person2Icon from '@mui/icons-material/Person2';
import { IconButton } from '@mui/material';
import Logo from '../Assets/Logo.png'
import ForumIcon from '@mui/icons-material/Forum'

function Header() {
  return (
    <div className='header'>
      <IconButton>
      <Person2Icon/>
      </IconButton>

      <IconButton>
        <img src={Logo} className='header__logo'/>
       </IconButton>

       <IconButton>
        <ForumIcon/>
       </IconButton>
      

       
        
    </div>
  )
}

export default Header