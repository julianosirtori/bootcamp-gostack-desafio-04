import React from 'react';

import './Comment.css';

function Comment({ comment }){
  return (
    <li>
      <img src={comment.author.avatar}/>
      <div className="content">
        <p>{comment.content}</p>
      </div>
    </li>
  );
}

export default Comment;