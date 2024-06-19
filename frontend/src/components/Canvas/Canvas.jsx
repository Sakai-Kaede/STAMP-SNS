import './Canvas.css'

export default function Canvas() {
  const images = [];

  document.addEventListener('click', function(event) {
    const x = event.clientX;
    const y = event.clientY;
              
    const img = document.createElement('img');
    img.src = 'https://via.placeholder.com/50';
    img.classList.add('image');
    img.style.left = `${x - 25}px`;
    img.style.top = `${y - 25}px`;

    document.body.appendChild(img);
              
    images.push({ element: img, x: x, y: y });
  });

  return (
    <div className='back'></div>
  )
}