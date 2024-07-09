import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ImageIcon from '@mui/icons-material/Image';
import './TopBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../post/Post';
import PreStamp from '../preStamp/PreStamp';
import Update from '../update/Update';

export default function TopBar() {
  const [file, setFile] = useState(null);
  const [coordinates, setCoordinates] = useState({ x: -999, y: -999 });

  return (
    <div className='topBarContainer'>
      <div className='topBarLeft'>
        <div className='logo'>STAMP SNS</div>
      </div>
      <div className='topBarCenter'>
        <Post coordinates={coordinates} file={file} />
      </div>
      <div className='topBarRight'>
        <PreStamp setCoordinates={setCoordinates} file={file} />
        <label className='shareOption' htmlFor='file'>
          <ImageIcon className='shareIcon' />
          <div className='shareText'>スタンプ</div>
          <input
            type="file"
            id='file'
            accept='.png, jpeg, jpg'
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
        <Update />
        <Link to='/setting' style={{ textDecoration: 'none' }}>
          <div className='settingOption'>
            <AccountBoxIcon className='settingIcon' />
            <div className='settingText'>設定</div>
          </div>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <div className='loginOption'>
            <LoginIcon className='loginIcon' />
            <div className='loginText'>ログイン</div>
          </div>
        </Link>
      </div>
    </div>
  );
}