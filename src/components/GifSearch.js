import React from 'react'

export default class GifSearch extends React.Component {

    state = {
        search: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.onSearch(this.state.search)
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input name="search" value={this.state.search} placeholder="search" onChange={this.handleChange}></input>
            <input type="submit"></input>  
        </form>
        )
    }
}