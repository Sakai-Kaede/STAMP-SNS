import './TopBar.css'

export default function TopBar() {
  return (
    <div className='topBarContainer'>
      <div className='topBarLeft'>
        <div className='logo'>STAMP SNS</div>
      </div>
      <div className='topBarCenter'>
        <button className='post'>
          <span className='postString'>🚀投稿する</span>
        </button>
      </div>
      <div className='topBarRight'>
        <div>プロフィール</div>
        <div>ログイン</div>
      </div>
    </div>
  )
}