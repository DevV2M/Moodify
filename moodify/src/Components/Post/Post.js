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
    state = { 
        commentList: []
    }

    componentDidMount(){
        this.getComments();
    }

    getComments=()=>{
        let data=[
            {
                "username":"vithu_m",
                "commentId":"1234",
                "timeStamp":"12346545",
                "description":"Amazing!"
            },
            {
                "username":"kim_t",
                "commentId":"1234",
                "timeStamp":"12346545",
                "description":"Cool!"
            },
            {
                "username":"ananya_v",
                "commentId":"1234",
                "timeStamp":"12346545",
                "description":"well Done!"
            } 

        ];
        this.setState({commentList: data});

    }
    
    render() { 
        return (
            <div className='post_container'>
                {/* Header */}
                <div className='post_header'>
                    <Avatar className="post_image" src ={this.state.profileImage} />
                    <div className="post_username" >{this.props.userName}</div>
                </div>
                {/* Image */}
                <div>
                    <img src = {this.props.postImage} width = "615px" />
                </div>
                {/* Analytics */}
                <div>
                    <div style = {{"textAlign":"left","marginLeft":"10px"}}> 
                        <img src={love} className='post_reactimage' />
                        <img src={comment} className='post_reactimage' />
                        <img src={share} className='post_reactimage' />
                    </div>
                    <div style = {{"textAlign":"left","fontWeight":"bold","marginLeft":"20px"}}>
                        {this.props.likes} likes
                    </div>
                </div>
                {/* Comment Section  */}
                <div>
                    {
                        this.state.commentList.map((item,index)=>(
                            <div className='post_comment'>{item.username}: {item.description}</div>    
                        ))
                    }                    
                    <input text = "text" className='post_commentbox' placeholder = "Add a comment..." />
                </div>
            </div>
            
         );
    }
}
 
export default Post;