import './Canvas.css'

export default function Canvas() {
  const images = [];

  document.addEventListener('click', function(event) {
    const x = event.clientX;
    const y = event.clientY;
              
    if(y >= 70) {
      const img = document.createElement('img');
      img.src = 'https://via.placeholder.com/50';
      img.classList.add('image');
      img.style.left = `${x - 50}px`;
      img.style.top = `${y - 50}px`;

      document.body.appendChild(img);
                
      images.push({ element: img, x: x, y: y });
      }
  });

  return (
    <div className='back'></div>
  )
}