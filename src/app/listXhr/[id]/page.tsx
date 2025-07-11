"use client"
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function DetailXhr() {
  const params = useParams();
  const { id } = params;  // 获取动态路由参数 `id`
  const [loading, setLoading] = useState(true);
  const [postDetail, setPostDetail] = useState<Post | null>(null);
  const xhrUrl = 'https://jsonplaceholder.typicode.com/posts';
  useEffect(() => {
    setLoading(true);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', xhrUrl);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText) as Post[];
        const foundPost = data.find(post => post.id === Number(id));
        setPostDetail(foundPost || null);
      } else {
        console.error('Error:', xhr.statusText);
      }
      setLoading(false);
    }
    xhr.onerror = () => {
      console.log('Error:', xhr.statusText);
      setLoading(false);
    }
  }, [id]);
  if(loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Detail XHR</h1>
      <p>Page ID: {id}</p>
      {postDetail ? (
        <>
          <h2>{postDetail.title}</h2>
          <p>{postDetail.body}</p>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  )
}