import AutorenewIcon from '@mui/icons-material/Autorenew';
import './Update.css';

export default function Update() {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className='updateOption' onClick={handleClick}>
      <AutorenewIcon className='updeta' />
      <div>更新</div>
    </div>
  );
}