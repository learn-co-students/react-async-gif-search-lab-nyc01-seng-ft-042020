import React , {Component} from 'react';

class GifSearch extends Component {
    
    state = {
        search: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.props)
        this.props.renderGifs(this.state.search)
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    render() { 
        return ( 
                <div>
                <form onSubmit={this.handleSubmit}> 
                <input type="text" id="search" onChange={this.handleChange} value={this.state.search}></input>
                <input type="submit"></input>
                </form>
                </div>
         )
    }
}


export default GifSearch;