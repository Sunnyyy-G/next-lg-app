"use client";
import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function ListXhr() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const xhrUrl = 'https://jsonplaceholder.typicode.com/posts';
  const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', xhrUrl);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        setLoading(false);
        setPosts(JSON.parse(xhr.responseText));
        setAllPosts(JSON.parse(xhr.responseText));
      }
    }
    xhr.onerror = () => {
      console.log('Error:', xhr.statusText);
    }
  };

  // 封装好一个防抖函数
  function debounce<T extends unknown[]>(
    func: (...args: T) => void,
    delay: number
  ): (...args: T) => void {
    let timer: NodeJS.Timeout;
    
    return function(this: unknown, ...args: T) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  const handleSearch = (title: string) => {
    if(title && title !== '') {
      const filteredPosts = allPosts.filter(post => post.title.includes(title));
      setPosts(filteredPosts);
    } else {
      getData();
    }
  };
  
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center bg-[#cbf4ee] text-[#000] w-full h-screen overflow-y-hidden">
      <h1 className="text-[36px] font-bold leading-normal text-center text-black py-[15px]">
        List XHR
      </h1>
      <div className="flex items-center justify-center relative w-full py-[15px] bg-[#fff]">
        <label className="text-[18px] font-bold leading-normal text-[#333] relative mr-[20px]">
          搜索文章：
        </label>
        <input
          type="text"
          name="title"
          placeholder="请输入搜索文章标题"
          onInput={(e) =>
            debounce(handleSearch, 500)((e.target as HTMLInputElement).value)
          }
          className="w-[240px] h-[42px] border-[1px] border-[#ccc] rounded-[4px] px-[15px]"
        />
      </div>
      <div className="h-0 flex-1 flex flex-col bg-[#eee] relative w-full py-[50px]">
        <ul className="flex flex-wrap items-start w-full h-auto max-h-full overflow-y-auto gap-[20px] pr-[15px]">
          {loading ? (
            <p className="text-[#999] text-[48px] text-center leading-normal block w-full">
              loading...
            </p>
          ) : posts && posts.length > 0 ? (
            posts.map((post) => (
              <li
                key={post.id}
                className="basis-[calc(50%-10px)] shrink-0 text-[#333] text-[18px] leading-normal cursor-pointer hover:underline nth-[2n+1]:pl-[100px] nth-[2n]:pr-[100px] line-clamp-1"
                title={post.title}
              >
                <Link
                  href={`/listXhr/${post.id}`}
                  className="text-[#333] text-[18px] leading-normal cursor-pointer hover:underline"
                >
                  {post.id}. {post.title}
                </Link>
              </li>
            ))
          ) : (
            <p className="text-[#999] text-[48px] text-center leading-normal block w-full">
              暂无数据
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}