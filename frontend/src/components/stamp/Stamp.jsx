import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Stamp({ post }) {
  const [user, setUser] = useState({});

  // ページが読み込まれたときに、スタンプを読み込む
  useEffect(() => {
    // useEffectの無名関数には、asyncがつけられない
    const fetchUser = async () => {
      // PostスキーマのuserIdを取得
      const response = await axios.get(`/users/${post.userId}`);
      setUser(response.data);
    }
    fetchUser();
  }, []);

  const stampStyle = {
    position: "absolute",
    left: `${300}px`,  // x座標をpxで指定
    top: `${600}px`,   // y座標をpxで指定
    border: "1px solid black",
    padding: "10px",
    backgroundColor: "lightblue",
  };

  return <div style={stampStyle}>Stamp</div>
}