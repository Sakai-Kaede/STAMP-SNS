import './PreStamp.css';
import { useEffect } from 'react';

export default function PreStamp({ setCoordinates, file }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  // 投稿前のスタンプを表示する
  useEffect(() => {
    let images = [];

    const handleClick = (event) => {
      images.forEach((imgObj) => {
        imgObj.element.remove();
      });

      const x = event.clientX;
      const y = event.clientY;

      if (y >= 50) {
        const img = document.createElement('img');
        img.src = file ? URL.createObjectURL(file) : PUBLIC_FOLDER + 'like.png';
        img.classList.add('image');
        img.style.left = `${x - 50}px`;
        img.style.top = `${y - 50}px`;

        document.body.appendChild(img);

        images = [{ element: img, x: x, y: y }];

        setCoordinates({ x, y });
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [file]);

  return (
    <>
    </>
  );
}