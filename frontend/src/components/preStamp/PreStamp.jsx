import './PreStamp.css';
import { useEffect } from 'react';
import { images, clearImages } from '../../utils/images';

export default function PreStamp({ setCoordinates, file }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  // 投稿前のスタンプを表示する
  useEffect(() => {
    const handleClick = (event) => {
      clearImages();

      const x = event.clientX;
      const y = event.clientY;

      if (y >= 50) {
        const img = document.createElement('img');
        img.src = file ? URL.createObjectURL(file) : PUBLIC_FOLDER + 'like.png';
        img.classList.add('image');
        img.style.left = `${x - 50}px`;
        img.style.top = `${y - 50}px`;

        document.body.appendChild(img);

        images.push({ element: img, x: x, y: y });

        setCoordinates({ x, y });
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [file]);

  return null;
}
