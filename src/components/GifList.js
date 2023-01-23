import React from "react";

function GifList({gifs}) {
    return(
        <div>
            <ul>
                {gifs.map((gifData) => (
                    <li>
                        <img src={gifData.url} alt={gifData.url}></img>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default GifList;