import './Post.css';
import { useContext } from 'react';
import { AuthContext } from '../../state/AuthContext';
import axios from 'axios';

export default function Share({ coordinates, file }) {
  const { user } = useContext(AuthContext);

  // スタンプを投稿する
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user._id) {
      alert("ログインしてください。");
      return;
    }

    const postX = coordinates.x - 50;
    const postY = coordinates.y - 50;

    if (postX < 0 || postY < 0) {
      alert("スタンプを押す場所を選択してください。");
      return;
    }

    const newPost = {
      userId: user._id,
      xPosition: postX,
      yPosition: postY,
      img: file ? `${Date.now()}${file.name}` : 'like.png',
    };

    const data = new FormData();
    const fileName = newPost.img;
    data.append('name', fileName);
    data.append('file', file);

    try {
      await axios.post('/upload', data);
    } catch (err) {
      console.log(err);
    }

    try {
      await axios.post('/posts', newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <button className='post' type='submit'>🚀投稿する</button>
    </form>
  );
}