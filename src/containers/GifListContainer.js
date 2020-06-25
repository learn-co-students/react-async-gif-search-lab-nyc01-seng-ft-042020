import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    onSearch = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    gifs: json.data
                })
            })
    }

    render() {
        console.log(this.state.gifs)
        return (
            <div className = "GifListContainer">
                <GifSearch onSearch={this.onSearch}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

}