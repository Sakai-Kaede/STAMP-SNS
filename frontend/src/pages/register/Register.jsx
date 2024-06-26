import './Register.css'

export default function Register() {
  return (
    <div className='register'>
      <div className="registerWrapper">
        <div className='registerLeft'>
          <h3 className='registerLogo'>STAMP SNS</h3>
          <span className='registerDesc'>好きな場所に、好きなスタンプを</span>
        </div>
        <div className='registerRight'>
          <form className="registerBox" >
            <p className='registerMsg'>新規登録はこちら</p>
            <input type="text" className='registerInput' placeholder='ユーザー名' />
            <input type="password" className='registerInput' placeholder='パスワード' />
            <input type="password" className='registerInput' placeholder='確認用パスワード' />
            <button className='registerButton' type='submit'>サインアップ</button>
          </form>
        </div>
      </div>
    </div>
  )
}