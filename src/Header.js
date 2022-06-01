import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <IconButton>
                <MenuIcon />    
            </IconButton>  
            <img src="/images/Gmail_icon.png" alt=""/>        
        </div>

        <div className='header_middle'>
            <SearchIcon/>
            <input placeholder='Search mail' type="text"/>
            <ArrowDropDownIcon className='header_inputCaret'/>        
        </div>
        <div className='header_right'>
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar/>

        </div>
    </div>
  )
}

export default Header