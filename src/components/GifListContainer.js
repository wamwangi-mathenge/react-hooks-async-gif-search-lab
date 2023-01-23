import React, { useState } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";


function GifListContainer() {


    const [gifs, setGifs] = useState([
        {
            id: 1,
            url: "",
        },
        {
            id: 2,
            url: "",
        },
        {
            id: 3,
            url: "",
        },
        {
            id: 4,
            url: "",
        },
    ])

    function gifSetter(results) {
        setGifs(() => [
            {
                id: results.data[0].id,
                url: results.data[0].images.original.url,
            },
            {
                id: results.data[1].id,
                url: results.data[1].images.original.url,
            },
            {
                id: results.data[2].id,
                url: results.data[2].images.original.url,
            },
            {
                id: results.data[3].id,
                url: results.data[3].images.original.url,
            },
        ])
    }


    function fetchData(searchTerm) {
        fetch('https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=5iC7Am3nF5e7GET3mM1wpfWADt4RKKvb&rating=g')
        .then((response) => response.json())
        .then((results) => {
            gifSetter(results)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <div>
            <h1>GIfListContainer</h1>
            <GifSearch fetchData={fetchData}/>
            <GifList gifs={gifs}/>
        </div>
    )
}


 
export default GifListContainer;