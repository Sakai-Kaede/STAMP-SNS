import { Home, MessageRounded, Notifications, Search } from '@mui/icons-material'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <Home className='sidebarIcon'/>
            <span className='sidebarListItemHome'>ホーム</span>
          </li>
          <li className='sidebarListItem'>
            <Search className='sidebarIcon'/>
            <span className='sidebarListItemHome'>検索</span>
          </li>
          <li className='sidebarListItem'>
            <Notifications className='sidebarIcon'/>
            <span className='sidebarListItemHome'>通知</span>
          </li>
          <li className='sidebarListItem'>
            <MessageRounded className='sidebarIcon'/>
            <span className='sidebarListItemHome'>ホーム</span>
          </li>
          <li className='sidebarListItem'>
            <Home className='sidebarIcon'/>
            <span className='sidebarListItemHome'>ホーム</span>
          </li>
          <li className='sidebarListItem'>
            <Home className='sidebarIcon'/>
            <span className='sidebarListItemHome'>ホーム</span>
          </li>
          <li className='sidebarListItem'>
            <Home className='sidebarIcon'/>
            <span className='sidebarListItemHome'>ホーム</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
