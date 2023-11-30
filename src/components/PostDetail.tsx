import React from 'react'
import { Link } from 'react-router-dom'
export default function PostDetail() {
  return (
    <>
        <div className='post_detail'>
            <div className='post_box'>
                <div className='post_title'>
                    Whereas disregard and contempt for human
                </div>
                <div className='post_profile-box'>
                  <div className='post_profile'></div>
                  <div className='post_author-name'>김춘식</div>
                  <div className='post_date'>2023.01.11 토요일</div>
                </div>
                <div className='post_utils-box'>
                  <div className='post_edit'>
                    <Link to={`/posts/edit/1`}>수정</Link>
                  </div>
                  <div className='post_delete'>삭제</div>
                </div>
                <div className='post_text'>
                  Whereas disregard and contempt for human rights have resulted.Whereas disregard and contempt for human rights have resulted.Whereas disregard and contempt for human rights have resulted.Whereas disregard and contempt for human rights have resulted.Whereas disregard and contempt for human rights have resulted.
                </div>
            </div>
        </div>
    </>
    
  )
}
