import React from 'react'

export default function GifList (props) {

    return props.gifs.map(gif => <img src={gif.source} alt={gif.title} key={gif.id}></img>)

}