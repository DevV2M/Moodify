import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import "./InfoSection.css";
import imageSrc from "../../images/pp1.png"

class InfoSection extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div>
            <div className='info_container'>
                <Avatar src={imageSrc} className="info_image" />
                <div className='info_content'>
                   <div className='info_username'>vithu_m</div>
                   <div className='info_description' >Description</div>
                </div>
            </div>
        </div> 
        );
    }
}
 
export default InfoSection;