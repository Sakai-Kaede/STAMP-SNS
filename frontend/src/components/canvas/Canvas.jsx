import { useEffect, useState } from 'react';
import './Canvas.css'
import Stamp from '../stamp/Stamp';
import axios from 'axios';

export default function Canvas() {
  const [posts, setPosts] = useState([]);

  // ページが読み込まれたときに、スタンプを読み込む
  useEffect(() => {
    // useEffectの無名関数には、asyncがつけられない
    const fetchPosts = async () => {
      const response = await axios.get('/posts');
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  // const images = [];

  // document.addEventListener('click', function(event) {

  //   const x = event.clientX;
  //   const y = event.clientY;
              

  //   const img = document.createElement('img');
  //   img.src = 'https://via.placeholder.com/50';
  //   img.classList.add('image');
  //   img.style.left = `${x - 50}px`;
  //   img.style.top = `${y - 50}px`;

  //   document.body.appendChild(img);
                
  //   images.push({ element: img, x: x, y: y });
  // });

  return (
    <div className='canvas'>
      <div className='canvasWrapper'>
        {posts.map((post) => (
          <Stamp post={post} key={post.id}/>
        ))}
      </div>
    </div>
  )
}