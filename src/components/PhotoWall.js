import React,{Component} from 'react';

class PhotoWall extends Component{
    render(){
        return <div>
                    {this.props.posts.map()}
                </div>
    }
}

export default PhotoWall;