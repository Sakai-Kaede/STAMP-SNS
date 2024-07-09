import React, { useContext, useRef, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../state/AuthContext';
import './Setting.css';
import { Link } from 'react-router-dom';

export default function Setting() {
  const { user } = useContext(AuthContext);
  const username = useRef();
  const password = useRef();
  const { dispatch } = useContext(AuthContext);

  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user._id) {
      alert("ログインしてないと更新できません。");
      return;
    }

    const updatedUser = {
      userId: user._id,
      username: username.current.value,
      password: password.current.value,
    };

    try {
      const response = await axios.put(`/users/${user._id}`, updatedUser);
      setMessage('ユーザ情報が更新されました');
    } catch (err) {
      setMessage('エラーが発生しました');
    }
  };

  const handleLogout = () => {
    if (!user || !user._id) {
      alert("ログインしていません。");
      return;
    }
    dispatch({type: 'LOGOUT'});
    localStorage.removeItem('user');
    setMessage('ログアウトしました');
  };

  return (
    <div className='setting'>
      <form className='settingBox' onSubmit={handleSubmit}>
        <div className='settingWrapper'>
          <label className='settingMsg'>新しいユーザー名：</label>
          <input
            type="text" 
            className='settingInput' 
            required 
            ref={username}  
          />
        </div>
        <button className='settingButton' type="submit">更新</button>
      </form>
      <form className='settingBox' onSubmit={handleSubmit}>
        <div className='settingWrapper'>
          <label className='settingMsg'>新しいパスワード：</label>
          <input
            type="password" 
            className='settingInput' 
            required minLength={6}
            ref={password}
          />
        </div>
        <button className='settingButton' type="submit">更新</button>
      </form>
      {message && <p>{message}</p>}

      <button className='logoutButton' onClick={handleLogout}>ログアウト</button>
    
      <Link to='/' style={{textDecoration: 'none'}}>
        <div className='backButton'>戻る</div>
      </Link>
    </div>
  );
}
