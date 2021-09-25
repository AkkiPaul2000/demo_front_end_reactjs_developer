import React from 'react'
import "./Main.css"
import LsideIcon from './LsideIcon';
import HomeIcon from '@mui/icons-material/Home';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';


function Lsidebar() {
    return (
        <div className="Lside">
        <div className="icon"><TouchAppIcon fontSize="large" /><h2>Dexter App</h2></div>
    
           <LsideIcon Icon={HomeIcon} Text="Home"/>
            <LsideIcon Icon={ExploreIcon} Text="Explore" />
           <LsideIcon Icon={NotificationsIcon} Text="Notifications"/>
           <LsideIcon Icon={ChatIcon} Text="Messages" />
           <LsideIcon Icon={BookmarkIcon} Text="Bookmarks" />
           <LsideIcon Icon={ListIcon} Text="List" />
        </div>
    )
}

export default Lsidebar
