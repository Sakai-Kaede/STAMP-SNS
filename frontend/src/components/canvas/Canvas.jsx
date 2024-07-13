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

  return (
    <div className='canvas'>
      <div className='canvasWrapper'>
        {posts.map((post) => (
          <Stamp post={post} key={post._id}/>
        ))}
      </div>
    </div>
  )
}