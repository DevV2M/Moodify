import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import "./Suggestions.css";
import imageSrc from "../../images/pp1.png";

class Suggestions extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div>
            <div className='suggestions_container'>
                {/* header section */}
                <div className='suggestions_header'>
                    <div>Suggestions For You</div>
                </div>
                {/* content section */}
                <div className='suggestions_body'>
                    <div className='suggestions_friends'>
                        <Avatar className='suggestions_image' src={imageSrc} />
                        <div className='suggestions_username'>Sam</div>
                    </div>
                    <div className='suggestions_friends'>
                        <Avatar className='suggestions_image' src={imageSrc} />
                        <div className='suggestions_username'>Tim</div>
                    </div>
                    <div className='suggestions_friends'>
                        <Avatar className='suggestions_image' src={imageSrc} />
                        <div className='suggestions_username'>Will</div>
                    </div>
                    <div className='suggestions_friends'>
                        <Avatar className='suggestions_image' src={imageSrc} />
                        <div className='suggestions_username'>Bob</div>
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default Suggestions;