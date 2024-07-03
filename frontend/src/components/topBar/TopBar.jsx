import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ImageIcon from '@mui/icons-material/Image';
import './TopBar.css'
import { useState } from 'react';

export default function TopBar() {
  const [file, setFile] = useState(null);
  return (
    <div className='topBarContainer'>
      <div className='topBarLeft'>
        <div className='logo'>STAMP SNS</div>
      </div>
      <div className='topBarCenter'>
        <div className='post'>🚀投稿する</div>
      </div>
      <div className='topBarRight'>
        <label className='shareOption' htmlFor='file'>
          <ImageIcon className='shareIcon' />
          <div className='shareText'>スタンプ</div>
          <input 
            type="file" 
            id='file' 
            accept='.png, jpeg, jpg' 
            style={{display: 'none'}} 
            onChange={(e) => setFile(e.target.files[0])}/>
        </label>
        <div className='settingOption'>
          <AccountBoxIcon className='settingIcon'/>
          <div className='settingText'>設定</div>
        </div>
        <div className='loginOption'>
          <LoginIcon className='loginIcon'/>
          <div className='loginText'>ログイン</div>
        </div>
      </div>
    </div>
  )
}