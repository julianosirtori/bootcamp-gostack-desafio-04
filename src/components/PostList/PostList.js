import React, { Component } from 'react';

import posts from '../../data/posts';
import Post from '../Post/Post';

class PostList extends Component {
  state = {
    posts  
  }

  componentDidMount(){
    // console.log(this.state.posts);
  }

  
  render(){
    return (
      <div >
        {this.state.posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    )
  }
}

export default PostList;