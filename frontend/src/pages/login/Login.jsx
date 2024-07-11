import { useContext, useEffect, useRef } from 'react';
import './Login.css'
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import { Link } from 'react-router-dom';
import { images, clearImages } from '../../utils/images';

export default function Login() {
  const username = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext);

  // 画面移動時に画面上に残ったスタンプを削除する
  useEffect(() => {
    clearImages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        username: username.current.value,
        password: password.current.value,
      }, 
      dispatch
    );
  };

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className='loginLeft'>
          <h3 className='loginLogo'>STAMP SNS</h3>
          <span className='loginDesc'>好きな場所に</span>
          <br />
          <span className='loginDesc'>　好きなスタンプを</span>
        </div>
        <div className='loginRight'>
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className='loginMsg'>ログインはこちら</p>
            <input 
              type="text" 
              className='loginInput' 
              placeholder='ユーザ名' 
              required 
              ref={username}  
            />
            <input 
              type="password" 
              className='loginInput' 
              placeholder='パスワード' 
              required minLength={6}
              ref={password}
            />
            <button className='loginButton'>ログイン</button>
            <Link to='/register' style={{textDecoration: 'none'}}>
              <div className='loginRegisterButton'>アカウント作成</div>
            </Link>
            
          </form>
        </div>
      </div>
    </div>
  )
}
