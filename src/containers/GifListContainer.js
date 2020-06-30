import React, { Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from "../components/GifSearch.js";

class GifListContainer extends Component {
    
    state = {
        images: {
            image1: "",
            image2: "",
            image3: "",
        }
    }

    componentDidMount(){
        this.renderGifs("dogs")
    }

    renderGifs(search){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(r => r.json())
        .then(results => {
            console.log(results.data)
            this.setState({
                images: {
                    image1: results.data[0].images.original.url,
                    image2: results.data[1].images.original.url,
                    image3: results.data[2].images.original.url
                }
            })
        })
    }

    render() { 
        return ( 
            <div>
                < GifList images={this.state.images} />
                < GifSearch renderGifs={this.renderGifs} />
            </div>
        )
    }
}
 
export default GifListContainer;