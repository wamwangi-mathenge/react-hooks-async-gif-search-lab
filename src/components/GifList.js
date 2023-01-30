import React from "react";

function GifList({ gifs }) {
    console.log({ gifs })
    return(
        <div>
            <ul>
                {gifs.map((gifData) => (
                    <li style={{ listStyle: "none" }} key={gifData.id}>
                    <img src={gifData.url} alt={gifData.url}></img>
                    <br></br>
                  </li>
                ))}
            </ul>
        </div>
    )
}


export default GifList;