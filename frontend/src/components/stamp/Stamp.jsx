import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Stamp.css'
import sampleImage from './sample.jpg';

export default function Stamp({ post }) {
  const [user, setUser] = useState({});

  // ページが読み込まれたときに、スタンプを読み込む
  useEffect(() => {
    const fetchUser = async () => {
      // PostスキーマのuserIdを取得
      const response = await axios.get(`/users/${post.userId}`);
      setUser(response.data);
    }
    fetchUser();
  }, [post.userId]);

  // 加算を行うために数値に変換
  const xPosition = Number(post.xPosition);
  const yPosition = Number(post.yPosition);

  const stampStyle = {
    left: `${xPosition}px`,
    top: `${yPosition}px`,
  };
  const nameStyle = {
    left: `${xPosition + 75}px`,
    top: `${yPosition + 75}px`,
  };

  return (
    <div className="stampWrapper">
      <img src={sampleImage} className="stamp" style={stampStyle}/>
      <div className="username" style={nameStyle}>{user.username}</div>
    </div>
  )
}

