import React, { useState } from "react";


function GifSearch({fetchData}) {
    const [search, setSearch] = useState("")
    

    function handleInputChange(event) {
        setSearch(() => event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetchData(searchTerm)
    }



    return(
        <div>
            <h2>GifSearch</h2>
            <form onSubmit={handleSubmit}>
                <label for="search">Search</label>
                <br></br>
                <input type="text" name="search" onChange={handleInputChange} />
                <br></br>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
 
export default GifSearch;