import { useContext, useRef } from 'react';
import './Login.css'
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const username = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext);

  const navigate = useNavigate();

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

  const handleRegisterClick = () => {
    navigate('/register');
  };

  console.log(user);

  return (
    

    <div className='login'>
      <div className="loginWrapper">
        <div className='loginLeft'>
          <h3 className='loginLogo'>STAMP SNS</h3>
          <span className='loginDesc'>好きな場所に、好きなスタンプを</span>
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
            <button className='loginRegisterButton' onClick={handleRegisterClick}>アカウント作成</button>
          </form>
        </div>
      </div>
    </div>
  )
}
