import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import './TopBar.css'

export default function TopBar() {
  return (
    <div className='topBarContainer'>
      <div className='topBarLeft'>
        <div className='logo'>STAMP SNS</div>
      </div>
      <div className='topBarCenter'>
        <div className='post'>🚀投稿する</div>
      </div>
      <div className='topBarRight'>
        <AccountBoxIcon />
        <div>プロフィール</div>
        <LoginIcon />
        <div>ログイン</div>
      </div>
    </div>
  )
}