import React from 'react' 

class GifSearch extends React.Component {
    state = {
        query: "",
        limit: 0
    } 

    handleSubmit = e => {
        e.preventDefault() 
        this.props.fetchGIFs(this.state.query, this.state.limit) 
    } 

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})} />
                    <input type="number" value={this.state.limit} onChange={e => this.setState({limit: e.target.valueAsNumber})} />
                    <button className="ui button" type="submit">Search Gifs</button> 
                </form>
            </div>
        )
    }
} 

export default GifSearch; 