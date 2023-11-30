import React, { useState } from 'react'
import { Link } from 'react-router-dom'
interface PostListProps{
    hasNavigation?: boolean;
}

type TabType = "all" | "my";
export default function PostList({hasNavigation = true}:PostListProps) {
    const [activeTab, setActiveTab] =useState<TabType>("all");

  return (
    <>
        {hasNavigation && (
            <div className='post_navigation'>
                <div role='presentation' onClick={()=>setActiveTab("all")} className={activeTab === 'all'? 'post_navigation-active' : ''}>전체</div>
                <div role='presentation' onClick={()=>setActiveTab("my")} className={activeTab === 'my'? 'post_navigation-active' : ''}>나의 글</div>
            </div>
        )}
        <div className='post_list'>{[...Array(10)].map((value:any,index:number)=>{
            return(
                <div key={index} className='post_box'>
                    <Link to={`/posts/${index}`}>
                    <div className='post_profile-box'>
                        <div className='post_profile'></div>
                        <div className='post_author-name'>김춘식</div>
                        <div className='post_date'>2023.01.11 토요일</div>
                    </div>
                    <div className='post_title'>게시글 {index}</div>
                    <div className='post_text'>
                        Whereas disregard and contempt for human rights have resulted.Whereas disregard and contempt for human rights have resulted.Whereas disregard and contempt for human rights have resulted.Whereas disregard and contempt for human rights have resulted.Whereas disregard and contempt for human rights have resulted.
                    </div>
                    <div className='post_utils-box'>
                        <div className='post_edit'>수정</div>
                        <div className='post_delete'>삭제</div>
                    </div>
                    </Link>
                </div>
                )
            })}
        </div>
    </>
  )
}
