import { useEffect, useRef } from 'react';
import './Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { images, clearImages } from '../../utils/images';

export default function Register() {
  const username = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();

  // 画面移動時に画面上に残ったスタンプを削除する
  useEffect(() => {
    clearImages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity('パスワードが違います');
    } else {
      try {
        const user = {
          username: username.current.value,
          password: password.current.value,
        };
        await axios.post('/auth/register', user);
        navigate('/login');
      } catch(err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='register'>
      <div className="registerWrapper">
        <div className='registerLeft'>
          <h3 className='registerLogo'>STAMP SNS</h3>
          <span className='loginDesc'>好きな場所に</span>
          <br />
          <span className='loginDesc'>　好きなスタンプを</span>
        </div>
        <div className='registerRight'>
          <form className="registerBox" onSubmit={(e) => handleSubmit(e)}>
            <p className='registerMsg'>新規登録はこちら</p>
            <input 
              type="text" 
              className='registerInput' 
              placeholder='ユーザー名' 
              required
              ref={username}
            />
            <input 
              type="password" 
              className='registerInput' 
              placeholder='パスワード' 
              required minLength={6}
              ref={password}
            />
            <input 
              type="password" 
              className='registerInput' 
              placeholder='確認用パスワード' 
              required
              ref={passwordConfirmation}
            />
            <button className='registerButton' type='submit'>サインアップ</button>
          </form>
        </div>
      </div>
    </div>
  )
}