import React, { Component } from 'react'
import "./Post.css"
import statusimg from "../../images/pp1.png";
import { Avatar } from '@material-ui/core';
import postimage from "../../images/post.jpg";
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";

class Post extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className='post_container'>
                {/* Header */}
                <div className='post_header'>
                    <Avatar className="post_image" src ={this.state.profileImage} />
                    <div className="post_username" >{this.state.userName}</div>
                </div>
                {/* Image */}
                <div>
                    <img src = {this.state.postImage} width = "615px" />
                </div>
                {/* Analytics */}
                <div>
                    <div style = {{"marginLeft":"10px"}}> 
                        <img src={love} className='post_reactimage' />
                        <img src={comment} className='post_reactimage' />
                        <img src={share} className='post_reactimage' />
                    </div>
                    <div style = {{"fontWeight":"bold","marginLeft":"20px "}}>
                        {this.state.likes} likes
                    </div>
                </div>
                {/* Comment Section  */}
                <div >
                    <div className='post_comment'>Comment 1</div>
                    <div className='post_comment'>Comment 1</div>
                    <div className='post_comment'>Comment 1</div>
                    <div className='post_comment'>Comment 1</div>
                    <input text = "text" className='post_commentbox' placeholder = "Add a comment..." />
                </div>
            </div>
            
         );
    }
}
 
export default Post;