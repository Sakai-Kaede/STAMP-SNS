import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ImageIcon from '@mui/icons-material/Image';
import './TopBar.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../state/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function TopBar() {
  const [file, setFile] = useState(null);
  const {user} = useContext(AuthContext);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  // スタンプを投稿する
  const handleSubmit = async (e) => {
    const postX = coordinates.x - 50;
    const postY = coordinates.y - 50;
    const newPost = {
      userId: user._id,
      img: "/sample.jpg",
      xPosition: postX,
      yPosition: postY,
    }

    try {
      await axios.post('/posts', newPost);
    } catch(err) {
      console.log(err);
    }
  }

  // 投稿前のスタンプを表示する
  useEffect(() => {
    let images = [];
    
    const handleClick = (event) => {
      images.forEach(imgObj => {
        imgObj.element.remove();
      });

      const x = event.clientX;
      const y = event.clientY;

      if(y >= 50) {
        const img = document.createElement('img');
        img.src = 'https://via.placeholder.com/50';
        img.classList.add('image');
        img.style.left = `${x - 50}px`;
        img.style.top = `${y - 50}px`;

        document.body.appendChild(img);

        images = [{ element: img, x: x, y: y }];

        setCoordinates({ x, y });
      }      
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className='topBarContainer'>
      <div className='topBarLeft'>
        <div className='logo'>STAMP SNS</div>
      </div>
      <div className='topBarCenter'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <button className='post' type='submit'>🚀投稿する</button>
        </form>
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
        <Link to='/setting' style={{textDecoration: 'none'}}>
          <div className='settingOption'>
            <AccountBoxIcon className='settingIcon'/>
            <div className='settingText'>設定</div>
          </div>
        </Link>
        <Link to="/login" style={{textDecoration: 'none'}}>
          <div className='loginOption'>
            <LoginIcon className='loginIcon'/>
            <div className='loginText'>ログイン</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
