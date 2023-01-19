import React, { Component } from 'react';
import Post from '../Post/Post';
import "./MainPage.css";
import uploadImage from  "../../images/upload.png";

class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        postArray:[]
     }

     componentDidMount(){
        this.getPost();
     }

     getPost =()=>{ //API
        let data = [
            {
                "postId":"1234",
                "userName":"vithu_m",
                "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp":"1234",
                "likes":"12345"
            },
            {
                "postId":"124353",
                "userName":"Kim_t",
                "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp":"1234",
                "likes":"435656"
            },
            {
                "postId":"1456",
                "userName":"Joe_b",
                "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp":"1234",
                "likes":"3321"
            }
        ];

        this.setState({postArray: data});


     }
    render() { 
        return (
        <div>
            <div style={{"textAlign":"center","margin":"10px"}}>
                 <img className='mainpage_uploadIcon' src={uploadImage}/>
            </div>
            {
                this.state.postArray.map((item,index)=>(
                    <Post id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes} />
                ))
            } 
        </div> 
        );
    }
}
 
export default MainPage;