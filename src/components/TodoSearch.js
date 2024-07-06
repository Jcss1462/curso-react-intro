
import React from "react";


function TodoSearch({searchValue,setSearchValue}) {

    
    return (
        <div id="todoSearchContainer">
            <input 
            placeholder="Cortar cebolla"
            value={searchValue}
            onChange={(event)=>setSearchValue(event.target.value)}></input>
        </div>
    );
}

export { TodoSearch };
