import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import "./StatusBar.css";
import statusimg from "../../images/pp1.png";
import uploadImage from "../../images/statusadd.png";

class StatusBar extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        statusList: []
     }

    componentDidMount(){
        this.getData();
    }
    getData = () => {
        let data = [
            {
                "username":"vithu_m","imageURL":
                "../../images/pp1.png"
            },
            {
                "username":"testing",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username":"asdad",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username":"fasdas",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username":"fasdas",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username":"fasdas",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username":"fasdas",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username":"fasdas",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username":"fasdas",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username":"fasdas",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username":"fasdas",
                "imageURL": "../../images/pp1.png"
            }
        ]
        this.setState({statusList: data})
    }
    render() { 
        return (
            <div>
                <div className='statusbar_container'>
                    < img src={uploadImage} className="statusbar_upload" width="60px" height="60px" />
                    {
                        this.state.statusList.map((item,index) =>(
                           <div className='status'>
                                <Avatar className='statusbar_status' src = {statusimg} /> 
                                <div className='statusbar_text'>{item.username}</div>
                            </div>
                        ))
                    }                                  
                </div>
            </div>  
        );
    }
}
 
export default StatusBar;