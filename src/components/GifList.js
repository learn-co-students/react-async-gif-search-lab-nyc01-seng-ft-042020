import React, { Component } from 'react'

class GifList extends Component {
    
    render() { 
        return ( 
            <ul>
                <li><img src={this.props.images.image1} alt="first" /></li>
                <li><img src={this.props.images.image2} alt="second" /></li>
                <li><img src={this.props.images.image3} alt="third" /></li>
            </ul>
         )
    }
}

export default GifList;