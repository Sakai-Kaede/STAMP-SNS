import './Login.css'

export default function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className='loginLeft'>
          <h3 className='loginLogo'>STAMP SNS</h3>
          <span className='loginDesc'>好きな場所に、好きなスタンプを</span>
        </div>
        <div className='loginRight'>
          <form className="loginBox">
            <p className='loginMsg'>ログインはこちら</p>
            <input type="email" className='loginInput' placeholder='Eメール'/>
            <input type="password" className='loginInput' placeholder='パスワード'/>
            <button className='loginButton'>ログイン</button>
            <span className='loginForget'>パスワードを忘れた方へ</span>
            <button className='loginRegisterButton'>アカウント作成</button>
          </form>
        </div>
      </div>
    </div>
  )
}
