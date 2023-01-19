import React, { Component } from 'react';
import Post from '../Post/Post';
import "./MainPage.css";

class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
        <div>
            <Post id="1234" userName="vithu_m" postImage="https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg" likes="" />
            <Post id="1234" userName="vithu_m" postImage="https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg" likes="" />
            <Post id="1234" userName="vithu_m" postImage="https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg" likes="" />
            <Post id="1234" userName="vithu_m" postImage="https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg" likes="" />
        </div> )
        ;
    }
}
 
export default MainPage;