import React, { Component } from 'react';

import './Post.css';
import Comment from '../Comment/Comment';

function Post({post}) {
  return (
    <div className="post">
      <div className="header">
        <img src={post.author.avatar}/>
        <div className="details">
          <p className="author">{post.author.name}</p>
          <p className="date">{post.date}</p>
        </div>
      </div>
      <p>{post.content}</p>
      <hr/>
      <ul className="comments">
        {post.comments.map(
          comment => <Comment key={comment.id} comment={comment}/>)}
      </ul>
    </div>);
}

export default Post;